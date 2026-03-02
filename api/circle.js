export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID || 'app4vF25O9QS3ZqhG';
  const AIRTABLE_TABLE = process.env.AIRTABLE_CIRCLE_TABLE || 'Investor Circle';

  if (!AIRTABLE_TOKEN) {
    console.error('AIRTABLE_TOKEN not configured');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          typecast: true,
          records: [
            {
              fields: {
                Name: name.trim(),
                Email: email.trim().toLowerCase(),
                Source: 'Website',
                'Date Added': new Date().toISOString().split('T')[0],
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Airtable error:', err);
      return res.status(502).json({ error: 'Failed to save. Please try again.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Circle API error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
