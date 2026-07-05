export async function onRequest(context) {
  const stripeKey = context.env.STRIPE_SECRET_KEY;
  const siteUrl = context.env.SITE_URL || 'https://ih8k8.com';

  if (!stripeKey) {
    return new Response(
      JSON.stringify({
        url: `${siteUrl}?donation=unavailable`,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${stripeKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'mode': 'payment',
      'success_url': `${siteUrl}?donation=thanks`,
      'cancel_url': `${siteUrl}?donation=cancelled`,
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][product_data][name]': 'Donation to ih8k8.com',
      'line_items[0][price_data][product_data][description]': 'Help me hate Kubernetes from a non-orchestrated platform.',
      'line_items[0][price_data][unit_amount_decimal]': '500',
      'line_items[0][quantity]': '1',
      'allow_promotion_codes': 'true',
      'payment_method_types[]': 'card',
    }),
  });

  const session = await stripeRes.json();

  return new Response(JSON.stringify({ url: session.url }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
