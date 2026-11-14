# How to Contribute

Thank you for your interest in contributing to the **QVD File Format Specification**!

This document describes the contribution guidelines for the project. It defines the rules for
participation and explains how the specification is organized and maintained. By contributing, you
agree to follow the processes and conventions outlined here to ensure a consistent, reliable and
collaborative specification.

## Branch Organization

All work takes place on the `main` branch. The specification is a living document and is not
versioned: `main` always represents the current state of knowledge, and the website is built from
it. We aim to keep `main` in a consistent state at all times, with the website building without
errors.

## Project Language

English is the official language of the project.

Please use English for:
- The specification and all other documentation
- Source code and code comments
- Commit messages
- GitHub issues, pull requests, and discussions

This ensures consistency and makes the project accessible to a wider, international audience.

## Sources and Clean Room

The specification is based solely on publicly available information. Only the following sources
are allowed:

- Observation of QVD files that you are entitled to analyse
- Publicly available source code of open-source software that reads or writes QVD files
- Publicly available descriptions of the format

Please do **not** contribute content derived from non-public material, such as Qlik partner
documentation, material under a non-disclosure agreement or any other confidential information,
neither literally nor in substance.

QVD files contributed as examples must contain synthetic data only. Never share files containing
customer, personal or otherwise confidential data.

## Bugs, Findings, and Discussions

All communication related to errors, new findings and project-related discussions is handled
through **GitHub Issues** in this repository.

Please open an issue to:
- Report an error or inaccuracy in the specification
- Confirm or refute a statement marked as _unverified_
- Describe behaviour of QVD files that is not yet covered
- Discuss the structure or wording of the specification

When reporting a finding, include as much relevant information as possible, such as the software and
version that produced the file, the relevant part of the header or binary data, and how the
observation was made. If possible, attach a small QVD file with synthetic data that demonstrates
the behaviour.

Using GitHub Issues as the central exchange format ensures transparency, traceability, and a shared
understanding of decisions and progress.

## Writing the Specification

To keep the specification consistent and trustworthy, please follow these conventions:

- **Describe the format, not an implementation.** Do not refer to specific libraries or tools in
  the specification. Describe differences in behaviour neutrally, e.g. "some readers …". Libraries
  are only listed on the Implementations page.
- **Do not guess.** Only document what is backed by observation or an existing implementation.
  Describe observations as such, e.g. "In all observed files, …".
- **Mark open questions.** Statements that are not yet confirmed are marked with an aside:

  ```mdx
  <Aside type="caution" title="Unverified">
  The meaning of non-empty `Compression` values is not confirmed.
  </Aside>
  ```

  When a statement is confirmed, update the text and remove the aside.
- **Use normative language consistently.** The key words MUST, MUST NOT, SHOULD, SHOULD NOT and
  MAY are used as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).
- **Keep pages focused.** Each page describes one part of the format. Overview pages explain
  concepts, while details belong on the dedicated pages.

## Commit Messages

We follow a structured commit message convention inspired by the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md).
This helps keep our history readable and ensures consistency across contributions.

Each commit message consists of a header, a body, and a footer. See [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md) for details.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Header

A typical commit message header consists of a **type**, optional **scope**, and a concise **description**,
for example:

```
<type>(<scope>): <short summary>
```

#### Type

In contrast to the Angular project, this project uses its own types. The following types are used:

- `docs`: Changes to the content of the specification or other documentation
- `feat`: A new feature of the website, e.g. a new component
- `fix`: A correction of an error, in the specification or the website
- `refactor`: A change that neither fixes an error nor adds a feature
- `build`: Changes that affect the build system or external dependencies
- `revert`: Reverts a previous commit

#### Scope

The scope is an optional field that specifies the part of the project that is changed by this commit.
Most of the time, this may not be necessary. Possible values are:

- `spec`: The content of the specification
- `site`: The website, e.g. its layout, components or configuration

#### Short Summary

The short summary is a one-line description of the commit. It should use the imperative voice in the
present and not end with a period. It may not exceed 50 characters.

### Body

The body contains an optional more detailed description of the commit, typically including one up to
five short sentences. It should explain the main purpose of the change and any relevant background
information.

### Footer

The footer contains any additional information, such as references to issues or other relevant
information.

## Sending a Pull Request

The maintainers actively review incoming pull requests. Each pull request will be reviewed and may be
merged, require changes, or be closed with an explanation.

Changes to the specification are reviewed carefully, as its value depends on its accuracy. Please
explain in the pull request how a new or changed statement was verified. This can result in longer
review times. We strive to provide timely feedback and keep contributors informed throughout the
review process.

To keep reviews efficient and changes easy to understand, pull requests should be as small and focused
as possible. Each pull request should address a single problem or concern. Unrelated changes (for
example website changes and changes to the specification) should be split into separate pull requests.

## License

Contributions to the specification are made under the
[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
By contributing to this project, you consent to the terms of the license.
