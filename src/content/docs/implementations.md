---
title: QVD Implementations
description: "Stable open-source libraries that read and write Qlik QVD files in Rust, Python and JavaScript, as reference implementations of the QVD format."
sidebar:
  label: Implementations
  order: 8
---

The following open-source libraries read and write QVD files and can serve as reference
implementations of the format. They are sorted alphabetically; the list makes no statement about
their conformance to this specification.

| Name | Language | Package | License |
| --- | --- | --- | --- |
| [OpenQVD](https://github.com/Sigilweaver/OpenQVD) | Rust, Python | [crates.io](https://crates.io/crates/openqvd), [PyPI](https://pypi.org/project/openqvd/) | Apache-2.0 |
| [PyQvd](https://github.com/MuellerConstantin/PyQvd) | Python | [PyPI](https://pypi.org/project/PyQvd/) | MIT |
| [qvdjs](https://www.npmjs.com/package/qvdjs) | JavaScript | [npm](https://www.npmjs.com/package/qvdjs) | MIT |
| [qvdrs](https://github.com/bintocher/qvdrs) | Rust, Python, JavaScript | [crates.io](https://crates.io/crates/qvd), [PyPI](https://pypi.org/project/qvdrs/), [npm](https://www.npmjs.com/package/qvdrs) | MIT |

## Adding a library

The list is limited to libraries that are stable, documented, published as a package and
actively maintained, and that both read and write QVD files. Tools and integrations built on top
of a library are not listed. To suggest a library, please open an
[issue](https://github.com/MuellerConstantin/qvdspec/issues).
