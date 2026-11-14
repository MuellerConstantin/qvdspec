---
title: QVD File Format Specification
description: "An independent, open specification of the Qlik QVD (QlikView Data) file format, covering file structure, XML header, symbol tables and index table."
head:
  - tag: title
    content: QVD File Format Specification | Open documentation of the Qlik QVD format
sidebar:
  label: Overview
  order: 1
---

QVD (QlikView Data) is a proprietary file format by [Qlik](https://www.qlik.com/), used by
QlikView and Qlik Sense to store a single data table on disk. QVD files are commonly used as an
intermediate storage layer in Qlik data pipelines, for example to cache extracted source data or
to share prepared tables between applications. Qlik describes the format and its use only at a
high level in its [official documentation](https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Scripting/QVD-files-scripting.htm),
but does not publish a detailed specification.

This site is an independent, open documentation of the QVD file format. It is based on
reverse engineering: the analysis of QVD files and of publicly available open-source software
that reads and writes them. It does not use any non-public information from Qlik.

The goal is interoperability: to help other tools exchange data with QVD files, so that data
stored in them remains accessible across different systems.
The structure of a file is described on the [File structure](file-structure/) page.

## Conventions

The key words MUST, MUST NOT, SHOULD, SHOULD NOT and MAY are to be interpreted as described in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

Statements that are not yet confirmed are marked as follows:

:::caution[Unverified]
The described behaviour has not yet been confirmed.
:::

## Disclaimer

This specification is a collection of observations. It makes no claim to be complete or
correct, and files produced by other software or other versions may deviate from it.
Use it at your own risk.

If you can confirm or correct anything marked as unverified, please open an
[issue](https://github.com/MuellerConstantin/qvd-spec/issues) or a
[pull request](https://github.com/MuellerConstantin/qvd-spec/pulls).

This project is not affiliated with or endorsed by Qlik. Qlik, QlikView, Qlik Sense and QVD
are trademarks of their respective owners.
