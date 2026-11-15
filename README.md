# QVD File Format Specification

> An independent, open specification of the Qlik QVD file format.

QVD (QlikView Data) is a proprietary file format by Qlik, used by QlikView and Qlik Sense to store
a single data table. Qlik describes the format only at a high level and does not publish a detailed
specification. This project documents the format openly, based on the analysis of QVD files and of
publicly available open-source software that reads and writes them. The goal is interoperability:
to help other tools exchange data with QVD files.

The specification is a living document and a collection of observations. Statements that are not
yet confirmed are marked as _unverified_ and are refined as new findings come in.

---

- [Website](#website)
- [Contributing](#contributing)
  - [Quickstart](#quickstart)
  - [Development workflow](#development-workflow)
- [Disclaimer](#disclaimer)
- [License](#license)

---

## Website

The specification is published at
[qvdspec.org](https://qvdspec.org) as a website built with
[Starlight](https://starlight.astro.build). Its content lives as Markdown/MDX files in
[`src/content/docs`](src/content/docs).

## Contributing

If you can confirm, correct or extend anything in the specification, please open an issue or fork
the repository and create a pull request. Findings about elements and values marked as
_unverified_ are especially welcome. Please ensure that your contribution follows the
[Contributing Guidelines](CONTRIBUTING.md).

### Quickstart

Clone the repository and install the dependencies. Make sure Node.js is installed.

```bash
git clone https://github.com/MuellerConstantin/qvdspec.git
cd qvdspec

npm install
```

### Development workflow

Start the local development server at `http://localhost:4321`:

```bash
npm run dev
```

Build the website:

```bash
npm run build
```

Preview the built website:

```bash
npm run preview
```

## Disclaimer

This project is not affiliated with or endorsed by Qlik. Qlik, QlikView, Qlik Sense and QVD are
trademarks of their respective owners.

The specification makes no claim to be complete or correct. Files produced by other software or
other versions may deviate from it. Use it at your own risk.

## License

Copyright (c) 2026 Constantin Müller and contributors

The specification is licensed under the
[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
You are free to share and adapt it for any purpose, provided that you give appropriate credit,
provide a link to the license and indicate if changes were made.

See [LICENSE.md](LICENSE.md) for more details.
