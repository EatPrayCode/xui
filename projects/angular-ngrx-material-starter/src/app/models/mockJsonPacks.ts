const brand1 = {
  key: 'reebok',
  value: 'REEBOK',
  variantsList: [
    {
      key: 'reebok1',
      value: 'reebok1',
      price: 100
    },
    {
      key: 'reebok2',
      value: 'reebok2',
      price: 120
    },
    {
      key: 'reebok3',
      value: 'reebok3',
      price: 150
    }
  ]
};

const brand2 = {
  key: 'adidas',
  value: 'adidas',
  variantsList: [
    {
      key: 'adidas1',
      value: 'adidas1',
      price: 223
    },
    {
      key: 'adidas2',
      value: 'adidas2',
      price: 215
    },
    {
      key: 'adidas3',
      value: 'adidas3',
      price: 226
    }
  ]
};

const brand3 = {
  key: 'puma',
  value: 'puma',
  variantsList: [
    {
      key: 'puma1',
      value: 'puma1',
      price: 300
    },
    {
      key: 'puma2',
      value: 'puma2',
      price: 620
    },
    {
      key: 'puma3',
      value: 'puma3',
      price: 750
    }
  ]
};

const brand4 = {
  key: 'diesel',
  value: 'diesel',
  variantsList: [
    {
      key: 'diesel1',
      value: 'diesel1',
      price: 400
    },
    {
      key: 'diesel2',
      value: 'diesel2',
      price: 320
    },
    {
      key: 'diesel3',
      value: 'diesel3',
      price: 550
    }
  ]
};

const quantityList = [
  {
    key: 'small',
    value: 0.5
  },
  {
    key: 'big',
    value: 1
  },
  {
    key: 'large',
    value: 2
  },
  {
    key: 'extralarge',
    value: 3
  }
];

const item1: any = {
  isChecked: true,
  name: 'Item1',
  brandsList: [brand1, brand2, brand3, brand4],
  quantityList: quantityList
};

const item2: any = {
  isChecked: true,
  name: 'Item2',
  brandsList: [brand2, brand3],
  quantityList: quantityList
};

const item3: any = {
  isChecked: true,
  name: 'Item2',
  brandsList: [brand3, brand4],
  quantityList: quantityList
};

const packSizes = [
  {
    name: 'small',
    key: 'small'
  },
  {
    name: 'large',
    key: 'large'
  },
  {
    name: 'extralarge',
    key: 'extralarge'
  }
];

const json1: any = {
  items: [item1, item2, item3]
};

const json2: any = {
  items: [item1, item3]
};

const packTemplates = [
  {
    name: 'UltraMegaTemplate',
    value: json1,
    key: 'UltraMegaTemplate'
  },
  {
    name: 'MegaTemplate',
    value: json2,
    key: 'MegaTemplate'
  },
  {
    name: 'BudgetTemplate',
    value: json1,
    key: 'BudgetTemplate'
  },
  {
    name: 'MiniTemplate',
    value: json1,
    key: 'MiniTemplate'
  }
];

export const mockData = {
  packName: 'MAIN_PACK_NAME',
  packTemplates: packTemplates,
  packSizes: packSizes
};
