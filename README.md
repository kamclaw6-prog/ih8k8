# ih8k8.com — I Hate Kubernetes

A parody site about the pain of using Kubernetes. Hosted on Cloudflare Pages (not on k8s, obviously).

## Deploy to Cloudflare Pages

### Prerequisites

- A [Cloudflare](https://dash.cloudflare.com) account
- (Optional) A [Stripe](https://stripe.com) account for donations

### Deploy (Manual Upload)

1. Go to **Cloudflare Dashboard → Workers & Pages → Pages**
2. Click **"Upload assets"**
3. Upload `index.html` and `style.css`
4. Click **"Deploy"**

### Deploy (Git — Recommended)

1. Push this repo to GitHub
2. In Cloudflare Pages, click **"Connect to Git"**
3. Select the repo
4. **Build settings:** Framework preset = "None", Build output directory = `/`
5. Click **"Save and Deploy"**

### Custom Domain

1. In your Pages project → **"Custom domains"**
2. Add `ih8k8.com`
3. Point your domain's nameservers to Cloudflare

## Setting Up Donations ($5)

The donate button links directly to a Stripe Payment Link — no serverless functions needed.

1. Create a [Stripe account](https://dashboard.stripe.com)
2. Go to **Stripe Dashboard → Payment Links** → **"Create a Payment Link"**
3. Set price to **$5** (one-time)
4. Publish and copy the link (looks like `https://buy.stripe.com/...`)
5. Open `index.html` and replace `YOUR_PAYMENT_LINK_HERE` with your link
6. Commit and push — Cloudflare redeploys automatically

## Development

```bash
open index.html
```

## License

MIT — Hate freely.
