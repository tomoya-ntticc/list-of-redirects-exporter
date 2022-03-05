# list-of-redirects-exporter

Listing of redirects on AirTable APPS

![Screen Shot 2022-03-04 at 8 49 30](https://user-images.githubusercontent.com/94507251/156868701-b4ade050-a926-439b-90fa-7e77806d1873.png)

## Requirements

- Node
  - [@airtable/blocks-cli](https://www.npmjs.com/package/@airtable/blocks-cli)
- AirTable
  - Invitation of Base collaborators `HIVE renewal` in `NTTICC` workspace

## How to

### Setup

#### Install dependencies

```shell
npm install
```

### Develop

```shell
block run
```

then

1. Find AirTable APPS `ListOfRedirects` and select `Edit app`
2. Enter `https://localhost:9000` at App URL in Edit app window

![Screen Shot 2022-03-05 at 13 32 02](https://user-images.githubusercontent.com/94507251/156867862-abe9e9da-d353-4fc7-9aca-a5439edb3d84.png)

### Release

```shell
block release
```

## Misc

### References

- [AirTable Developers](https://www.airtable.com/developers)

## Notes

### Contributors

- [Tomoya KASHIMADA](https://github.com/tomoya-ntticc)
