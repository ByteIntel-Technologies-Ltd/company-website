# ByteIntel Technologies — Angular Frontend

A modern, performant marketing site for ByteIntel Technologies Ltd (Nigeria).

## Quickstart

```bash
npm install -g @angular/cli
npm install
npm run start
```

- Dev server: http://localhost:4200
- API base: `src/environments/environment.ts` (`apiUrl` defaults to `http://localhost:8080/api`)

## Production build

```bash
npm run build:prod
```

## Pages

- Home, Services, Solutions, Industries, About, Careers, Contact

## Contact form

Posts to `POST {apiUrl}/contact` with:
```json
{ "name": "", "email": "", "phone": "", "company": "", "message": "" }
```

Make sure your Spring Boot backend is running and CORS is configured to allow `http://localhost:4200` in development.
