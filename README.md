Stellar SEP-8 Client Webapp built using Next.js.

This app has been made to work with our customized [Regulated Assets Approval Server](https://github.com/bp-ventures/stellar-go/tree/sep8/services/regulated-assets-approval-server).

### Development

Create `.env.local`:

```
NEXT_PUBLIC_APPROVAL_SERVER_URL="https://as-uat.bpventures.us"
```

Install dependencies:

```
asdf install
npm install
```

Run dev server:

```
npm run dev
```

### Production

Create `.env.local`:

```
NEXT_PUBLIC_APPROVAL_SERVER_URL="https://as-uat.bpventures.us"
```

Install dependencies:

```
asdf install
npm install
```

Run production server:

```
npm run build
npx next start -p <port>
```
