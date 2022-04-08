export const mockPacks1 = [
  {
    id: 1,
    title: 'trim dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'nike',
    collection: ['new products'],
    category: 'Women',
    price: 145,
    sale: true,
    discount: '40',
    stock: 5,
    new: true,
    tags: ['new', 's', 'm', 'yellow', 'white', 'pink', 'nike'],
    variants: [
      {
        variant_id: 101,
        id: 1,
        sku: 'sku1',
        size: 's',
        color: 'yellow',
        image_id: 111
      },
      {
        variant_id: 102,
        id: 1,
        sku: 'sku2',
        size: 's',
        color: 'white',
        image_id: 112
      },
      {
        variant_id: 103,
        id: 1,
        sku: 'sku3',
        size: 's',
        color: 'pink',
        image_id: 113
      },
      {
        variant_id: 104,
        id: 1,
        sku: 'sku4',
        size: 'm',
        color: 'yellow',
        image_id: 111
      },
      {
        variant_id: 105,
        id: 1,
        sku: 'sku5',
        size: 'm',
        color: 'white',
        image_id: 112
      },
      {
        variant_id: 106,
        id: 1,
        sku: 'sku5',
        size: 'm',
        color: 'pink',
        image_id: 113
      },
      {
        variant_id: 107,
        id: 1,
        sku: 'sku1',
        size: 'l',
        color: 'yellow',
        image_id: 111
      }
    ],
    images: [
      {
        image_id: 111,
        id: 1,
        alt: 'yellow',
        src: 'assets/images/product/fashion/39.jpg',
        variant_id: [101, 104]
      },
      {
        image_id: 112,
        id: 1,
        alt: 'white',
        src: 'assets/images/product/fashion/6.jpg',
        variant_id: [102, 105]
      },
      {
        image_id: 113,
        id: 1,
        alt: 'pink',
        src: 'assets/images/product/fashion/25.jpg',
        variant_id: [103, 106]
      }
    ]
  },
  {
    id: 2,
    title: 'belted dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'zara',
    collection: ['best sellers'],
    category: 'Women',
    price: 185,
    sale: false,
    discount: '40',
    stock: 2,
    new: false,
    tags: ['s', 'm', 'l', 'olive', 'navy', 'red', 'zara'],
    variants: [
      {
        variant_id: 201,
        id: 2,
        sku: 'sku1',
        size: 's',
        color: 'olive',
        image_id: 211
      },
      {
        variant_id: 202,
        id: 2,
        sku: 'sku2',
        size: 's',
        color: 'navy',
        image_id: 212
      },
      {
        variant_id: 203,
        id: 2,
        sku: 'sku3',
        size: 's',
        color: 'red',
        image_id: 213
      },
      {
        variant_id: 204,
        id: 2,
        sku: 'sku4',
        size: 'm',
        color: 'olive',
        image_id: 211
      },
      {
        variant_id: 205,
        id: 2,
        sku: 'sku4',
        size: 'm',
        color: 'navy',
        image_id: 212
      },
      {
        variant_id: 206,
        id: 2,
        sku: 'sku4',
        size: 'm',
        color: 'red',
        image_id: 213
      },
      {
        variant_id: 207,
        id: 2,
        sku: 'sku4',
        size: 'l',
        color: 'olive',
        image_id: 211
      },
      {
        variant_id: 208,
        id: 2,
        sku: 'sku4',
        size: 'l',
        color: 'navy',
        image_id: 212
      },
      {
        variant_id: 209,
        id: 2,
        sku: 'sku4',
        size: 'l',
        color: 'red',
        image_id: 213
      }
    ],
    images: [
      {
        image_id: 211,
        id: 2,
        alt: 'olive',
        src: 'assets/images/product/fashion/3.jpg',
        variant_id: [201, 204, 207]
      },
      {
        image_id: 212,
        id: 2,
        alt: 'navy',
        src: 'assets/images/product/fashion/4.jpg',
        variant_id: [202, 205, 208]
      },
      {
        image_id: 213,
        id: 2,
        alt: 'pink',
        src: 'assets/images/product/fashion/5.jpg',
        variant_id: [203, 206, 209]
      },
      {
        image_id: 214,
        id: 2,
        alt: 'pink',
        src: 'assets/images/product/fashion/15.jpg',
        variant_id: [201, 204]
      }
    ]
  },
  {
    id: 3,
    title: 'fitted dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'denim',
    collection: ['featured products'],
    category: 'Women',
    price: 174,
    sale: false,
    discount: '40',
    stock: 0,
    new: true,
    tags: ['denim', 'l', 'm', 'white', 'black'],
    variants: [
      {
        variant_id: 301,
        id: 3,
        sku: 'sku3',
        size: 'l',
        color: 'white',
        image_id: 311
      },
      {
        variant_id: 302,
        id: 3,
        sku: 'skul3',
        size: 'm',
        color: 'white',
        image_id: 311
      },
      {
        variant_id: 303,
        id: 3,
        sku: 'sku3l',
        size: 'l',
        color: 'black',
        image_id: 312
      },
      {
        variant_id: 304,
        id: 3,
        sku: 'sku4m',
        size: 'm',
        color: 'black',
        image_id: 312
      }
    ],
    images: [
      {
        image_id: 311,
        id: 3,
        alt: 'white',
        src: 'assets/images/product/fashion/1.jpg',
        variant_id: [301, 303]
      },
      {
        image_id: 312,
        id: 1,
        alt: 'white',
        src: 'assets/images/product/fashion/2.jpg',
        variant_id: [302, 304]
      }
    ]
  },
  {
    id: 4,
    title: 'belted top',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'madame',
    collection: ['new products', 'on sale'],
    category: 'Women',
    price: 98,
    sale: false,
    discount: '50',
    stock: 10,
    new: true,
    tags: ['s', 'l', 'white', 'skyblue', 'madame'],
    variants: [
      {
        variant_id: 401,
        id: 4,
        sku: 'sku4',
        size: 's',
        color: 'white',
        image_id: 411
      },
      {
        variant_id: 402,
        id: 4,
        sku: 'skul4',
        size: 'l',
        color: 'white',
        image_id: 411
      },
      {
        variant_id: 403,
        id: 4,
        sku: 'sku4s',
        size: 's',
        color: 'skyblue',
        image_id: 412
      },
      {
        variant_id: 404,
        id: 4,
        sku: 'sku4l',
        size: 'l',
        color: 'skyblue',
        image_id: 412
      }
    ],
    images: [
      {
        image_id: 411,
        id: 4,
        alt: 'white',
        src: 'assets/images/product/fashion/8.jpg',
        variant_id: [401, 402]
      },
      {
        image_id: 412,
        id: 4,
        alt: 'skyblue',
        src: 'assets/images/product/fashion/7.jpg',
        variant_id: [403, 404]
      }
    ]
  },
  {
    id: 5,
    title: 'waist dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'biba',
    collection: ['featured products'],
    category: 'Women',
    price: 230,
    sale: true,
    discount: '20',
    stock: 4,
    new: true,
    tags: ['m', 'l', 'green', 'black', 'biba'],
    variants: [
      {
        variant_id: 501,
        id: 5,
        sku: 'sku5',
        size: 'm',
        color: 'green',
        image_id: 511
      },
      {
        variant_id: 502,
        id: 5,
        sku: 'skul5',
        size: 'l',
        color: 'green',
        image_id: 511
      },
      {
        variant_id: 503,
        id: 5,
        sku: 'sku5s',
        size: 'm',
        color: 'black',
        image_id: 512
      },
      {
        variant_id: 504,
        id: 5,
        sku: 'sku5l',
        size: 'l',
        color: 'black',
        image_id: 512
      }
    ],
    images: [
      {
        image_id: 511,
        id: 5,
        alt: 'green',
        src: 'assets/images/product/fashion/9.jpg',
        variant_id: [501, 503]
      },
      {
        image_id: 512,
        id: 5,
        alt: 'black',
        src: 'assets/images/product/fashion/10.jpg',
        variant_id: [502, 504]
      }
    ]
  },
  {
    id: 6,
    title: 'crop top',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'max',
    collection: ['best sellers'],
    category: 'Women',
    price: 121,
    sale: false,
    discount: '40',
    stock: 30,
    new: true,
    tags: ['new', 's', 'm', 'olive', 'gray', 'red', 'max'],
    variants: [
      {
        variant_id: 601,
        id: 6,
        sku: 'sku6',
        size: 's',
        color: 'olive',
        image_id: 611
      },
      {
        variant_id: 602,
        id: 6,
        sku: 'skul6',
        size: 's',
        color: 'gray',
        image_id: 612
      },
      {
        variant_id: 603,
        id: 6,
        sku: 'sku6s',
        size: 's',
        color: 'red',
        image_id: 613
      },
      {
        variant_id: 604,
        id: 6,
        sku: 'sku6l',
        size: 'm',
        color: 'olive',
        image_id: 611
      },
      {
        variant_id: 605,
        id: 6,
        sku: 'sku6l',
        size: 'm',
        color: 'gray',
        image_id: 612
      },
      {
        variant_id: 606,
        id: 6,
        sku: 'sku6l',
        size: 'm',
        color: 'red',
        image_id: 613
      }
    ],
    images: [
      {
        image_id: 611,
        id: 6,
        alt: 'olive',
        src: 'assets/images/product/fashion/11.jpg',
        variant_id: [601, 604]
      },
      {
        image_id: 612,
        id: 6,
        alt: 'gray',
        src: 'assets/images/product/fashion/12.jpg',
        variant_id: [602, 605]
      },
      {
        image_id: 613,
        id: 6,
        alt: 'red',
        src: 'assets/images/product/fashion/22.jpg',
        variant_id: [603, 606]
      }
    ]
  },
  {
    id: 7,
    title: 'sleeveless dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'biba',
    collection: ['best sellers'],
    category: 'Women',
    price: 290,
    sale: true,
    discount: '10',
    stock: 15,
    new: true,
    tags: ['s', 'm', 'pink', 'white', 'black', 'biba'],
    variants: [
      {
        variant_id: 701,
        id: 7,
        sku: 'sku7',
        size: 's',
        color: 'pink',
        image_id: 711
      },
      {
        variant_id: 702,
        id: 7,
        sku: 'skul7',
        size: 's',
        color: 'white',
        image_id: 712
      },
      {
        variant_id: 703,
        id: 7,
        sku: 'sku7s',
        size: 's',
        color: 'black',
        image_id: 713
      },
      {
        variant_id: 704,
        id: 7,
        sku: 'sku7l',
        size: 'm',
        color: 'pink',
        image_id: 711
      },
      {
        variant_id: 705,
        id: 7,
        sku: 'sku7l',
        size: 'm',
        color: 'white',
        image_id: 712
      },
      {
        variant_id: 706,
        id: 7,
        sku: 'sku7l',
        size: 'm',
        color: 'black',
        image_id: 713
      }
    ],
    images: [
      {
        image_id: 711,
        id: 7,
        alt: 'pink',
        src: 'assets/images/product/fashion/13.jpg',
        variant_id: [701, 704]
      },
      {
        image_id: 712,
        id: 7,
        alt: 'white',
        src: 'assets/images/product/fashion/8.jpg',
        variant_id: [702, 705]
      },
      {
        image_id: 713,
        id: 7,
        alt: 'black',
        src: 'assets/images/product/fashion/15.jpg',
        variant_id: [703, 706]
      }
    ]
  },
  {
    id: 8,
    title: 'v-neck dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'zara',
    collection: ['new products'],
    category: 'Women',
    price: 315,
    sale: true,
    discount: '70',
    stock: 15,
    new: false,
    tags: ['s', 'm', 'yellow', 'black', 'zara'],
    variants: [
      {
        variant_id: 801,
        id: 8,
        sku: 'sku8',
        size: 's',
        color: 'yellow',
        image_id: 811
      },
      {
        variant_id: 802,
        id: 8,
        sku: 'skul8',
        size: 's',
        color: 'black',
        image_id: 812
      },
      {
        variant_id: 803,
        id: 8,
        sku: 'sku8s',
        size: 'm',
        color: 'yellow',
        image_id: 811
      },
      {
        variant_id: 804,
        id: 8,
        sku: 'sku8l',
        size: 'm',
        color: 'black',
        image_id: 812
      }
    ],
    images: [
      {
        image_id: 811,
        id: 8,
        alt: 'yellow',
        src: 'assets/images/product/fashion/14.jpg',
        variant_id: [801, 804]
      },
      {
        image_id: 812,
        id: 8,
        alt: 'black',
        src: 'assets/images/product/fashion/16.jpg',
        variant_id: [802, 805]
      }
    ]
  },
  {
    id: 9,
    title: 'wrap dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'madame',
    collection: ['featured products'],
    category: 'Women',
    price: 115,
    sale: false,
    discount: '40',
    stock: 36,
    new: false,
    tags: ['new', 'm', 'l', 'black', 'maroon', 'madame'],
    variants: [
      {
        variant_id: 901,
        id: 9,
        sku: 'sku9',
        size: 'm',
        color: 'black',
        image_id: 911
      },
      {
        variant_id: 902,
        id: 9,
        sku: 'skul9',
        size: 'l',
        color: 'black',
        image_id: 911
      },
      {
        variant_id: 903,
        id: 9,
        sku: 'sku9s',
        size: 'm',
        color: 'maroon',
        image_id: 912
      },
      {
        variant_id: 904,
        id: 9,
        sku: 'sku9l',
        size: 'l',
        color: 'maroon',
        image_id: 912
      }
    ],
    images: [
      {
        image_id: 911,
        id: 9,
        alt: 'black',
        src: 'assets/images/product/fashion/15.jpg',
        variant_id: [901, 902]
      },
      {
        image_id: 912,
        id: 9,
        alt: 'maroon',
        src: 'assets/images/product/fashion/17.jpg',
        variant_id: [903, 904]
      }
    ]
  },
  {
    id: 10,
    title: 'floral dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'nike',
    collection: ['featured products'],
    category: 'Women',
    price: 175,
    sale: false,
    discount: '10',
    stock: 1,
    new: false,
    tags: ['m', 'l', 'black', 'pink', 'nike'],
    variants: [
      {
        variant_id: 1001,
        id: 10,
        sku: 'sku10',
        size: 'm',
        color: 'black',
        image_id: 1011
      },
      {
        variant_id: 1002,
        id: 10,
        sku: 'skul10',
        size: 'l',
        color: 'black',
        image_id: 1011
      },
      {
        variant_id: 1003,
        id: 10,
        sku: 'sku10s',
        size: 'm',
        color: 'pink',
        image_id: 1012
      },
      {
        variant_id: 1004,
        id: 10,
        sku: 'sku10l',
        size: 'l',
        color: 'pink',
        image_id: 1012
      }
    ],
    images: [
      {
        image_id: 1011,
        id: 10,
        alt: 'black',
        src: 'assets/images/product/fashion/18.jpg',
        variant_id: [1001, 1002]
      },
      {
        image_id: 1012,
        id: 10,
        alt: 'pink',
        src: 'assets/images/product/fashion/20.jpg',
        variant_id: [1003, 1004]
      }
    ]
  },
  {
    id: 11,
    title: 'maxi dress',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'biba',
    collection: ['new products'],
    category: 'Women',
    price: 266,
    sale: false,
    discount: '40',
    stock: 0,
    new: true,
    tags: ['new', 'm', 'l', 'red', 'black', 'biba'],
    variants: [
      {
        variant_id: 1101,
        id: 11,
        sku: 'sku11',
        size: 'm',
        color: 'red',
        image_id: 1111
      },
      {
        variant_id: 1102,
        id: 11,
        sku: 'skul11',
        size: 'l',
        color: 'black',
        image_id: 1112
      },
      {
        variant_id: 1103,
        id: 11,
        sku: 'sku11s',
        size: 'm',
        color: 'red',
        image_id: 1111
      },
      {
        variant_id: 1104,
        id: 11,
        sku: 'sku11l',
        size: 'l',
        color: 'black',
        image_id: 1112
      }
    ],
    images: [
      {
        image_id: 1111,
        id: 11,
        alt: 'red',
        src: 'assets/images/product/fashion/5.jpg',
        variant_id: [1101, 1102]
      },
      {
        image_id: 1112,
        id: 11,
        alt: 'black',
        src: 'assets/images/product/fashion/33.jpg',
        variant_id: [1103, 1104]
      }
    ]
  },
  {
    id: 12,
    title: 'boho tops',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    type: 'fashion',
    brand: 'nike',
    collection: ['best sellers', 'on sale'],
    category: 'Women',
    price: 129,
    sale: false,
    discount: '40',
    stock: 45,
    new: false,
    tags: ['xs', 's', 'm', 'red', 'pink', 'gray', 'nike'],
    variants: [
      {
        variant_id: 1201,
        id: 12,
        sku: 'sku12',
        size: 'xs',
        color: 'red',
        image_id: 1211
      },
      {
        variant_id: 1202,
        id: 12,
        sku: 'skul12',
        size: 'xs',
        color: 'pink',
        image_id: 1212
      },
      {
        variant_id: 1203,
        id: 12,
        sku: 'sku12s',
        size: 'xs',
        color: 'gray',
        image_id: 1213
      },
      {
        variant_id: 1204,
        id: 12,
        sku: 'sku12l',
        size: 's',
        color: 'red',
        image_id: 1211
      },
      {
        variant_id: 1205,
        id: 12,
        sku: 'sku12l',
        size: 's',
        color: 'pink',
        image_id: 1212
      },
      {
        variant_id: 1206,
        id: 12,
        sku: 'sku12l',
        size: 's',
        color: 'gray',
        image_id: 1213
      },
      {
        variant_id: 1207,
        id: 12,
        sku: 'sku12l',
        size: 'm',
        color: 'red',
        image_id: 1211
      },
      {
        variant_id: 1208,
        id: 12,
        sku: 'sku12l',
        size: 'm',
        color: 'pink',
        image_id: 1212
      },
      {
        variant_id: 1209,
        id: 12,
        sku: 'sku12l',
        size: 'm',
        color: 'gray',
        image_id: 1213
      }
    ],
    images: [
      {
        image_id: 1211,
        id: 12,
        alt: 'red',
        src: 'assets/images/product/fashion/22.jpg',
        variant_id: [1201, 1204, 1207]
      },
      {
        image_id: 1212,
        id: 12,
        alt: 'pink',
        src: 'assets/images/product/fashion/27.jpg',
        variant_id: [1202, 1205, 1208]
      },
      {
        image_id: 1213,
        id: 12,
        alt: 'black',
        src: 'assets/images/product/fashion/38.jpg',
        variant_id: [1203, 1206, 1209]
      }
    ]
  }
];
