# ih8k8.com — I Hate Kubernetes

A parody site about the pain of using Kubernetes. Hosted on Cloudflare Pages (not on k8s, obviously).

## Deploy to Cloudflare Pages

### Prerequisites

- A [Cloudflare](https://dash.cloudflare.com) account
- (Optional) A [Stripe](https://stripe.com) account for donations

### Deploy (Manual Upload)

1. Go to **Cloudflare Dashboard → Workers & Pages → Pages**
2. Click **"Upload assets"**
3. Upload the `index.html` and `style.css` files
4. Click **"Deploy"**

### Deploy (Git — Recommended)

1. Push this repo to GitHub/GitLab
2. In Cloudflare Pages, click **"Connect to Git"**
3. Select the repo
4. **Build settings:** Framework = "None", Build output = `/`
5. **Environment variables (Advanced):**
   - `STRIPE_SECRET_KEY` = `sk_live_...` (your Stripe secret key)
   - `SITE_URL` = `https://ih8k8.com`
6. Click **"Deploy"**

### Custom Domain

1. In your Pages project → **"Custom domains"**
2. Add `ih8k8.com`
3. Point your domain's nameservers to Cloudflare

## Setting Up Donations

The donation button calls a Cloudflare Function that creates a Stripe Checkout Session for $5.

1. Create a [Stripe account](https://dashboard.stripe.com)
2. Get your **Secret Key** (`sk_live_...`) from the Stripe Dashboard
3. Add it as an environment variable `STRIPE_SECRET_KEY` in Cloudflare Pages
4. Donations flow directly to your Stripe account (minus Stripe's ~2.9% + $0.30 fee)

No Kubernetes was involved in the making of this donation system.

## Development

```bash
# Serve locally with wrangler (includes Cloudflare Functions)
npx wrangler pages dev .

# Or just open the static HTML
open index.html
```

## License

MIT — Hate freely.
