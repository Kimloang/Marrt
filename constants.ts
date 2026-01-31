
import { Product, Category } from './types.ts';

export const CATEGORIES: Category[] = [
  { id: 'chips', name: 'Chips', icon: 'lunch_dining', color: 'bg-orange-100 text-primary dark:bg-orange-900/30' },
  { id: 'sweets', name: 'Sweets', icon: 'cookie', color: 'bg-pink-100 text-pink-500 dark:bg-pink-900/30' },
  { id: 'healthy', name: 'Healthy', icon: 'nutrition', color: 'bg-green-100 text-green-500 dark:bg-green-900/30' },
  { id: 'drinks', name: 'Drinks', icon: 'local_drink', color: 'bg-blue-100 text-blue-500 dark:bg-blue-900/30' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Salted Caramel Popcorn',
    price: 3.50,
    weight: '150g',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARRhyBMpjrwDBFeISqGutlAFkoqjm-xXjkt9zakOPcI13LI_rQDfZQCpFyC8Z1MuwHMt844S2JKmWz8zzNFfgaNYFH8UZRA7HRh0JXBa-fLbzBE5HuMYlWGY3Uk-0zz2rj6dHsOO5ySkA-9whHF95lBQTWRzWBxLqu_-Iim9KhfOCOmpXgvK44FrkTvZHOMH_n-_Woe__mVG5gv8-10B-WF5218w12fp885s3fIKtl7wCJiSP2w97kQG5CgSo-L2Xee_NEz_he798',
    category: 'sweets'
  },
  {
    id: '2',
    name: 'Premium Trail Mix',
    price: 4.95,
    weight: '120g',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDezn45hNXKlOWaDYJv0UNEQRcJ2muSlOVR0snivIPoaeZ_yps8MYpP7eIVq_b-RfwmakeL4FTm5UO97VUilMAjyKtLOqinxkAOPo1a9_erZBD8pTPI12y3DgxiQCuN0SGUyHGKy36VgyQig7S3pjWmXvd8HGRjXFJSzdOLdHNT9cd-WD02XWQ1hvU9TvVVdGDdCQO83sjXhJ44GSGg3TM0r-urSUq2ZaipTnSmo_cWEpWMRbqlLRD7hkj54E36Nu2msEkwQj3F-Xc',
    category: 'healthy'
  },
  {
    id: '3',
    name: 'Crispy Seaweed Original',
    price: 1.80,
    weight: '50g',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3RmdPVzrW4SqB0oYzxrbzKkhnoN4OfLUfLdYyFblLb-PdQQa1bGKcu51n2iihWFFhBBjY3s0JIPPvccPN8suMXNFVZJraAm3xXbYZoB323f6HqtzGbJAF0jh_D2rLVF89q-TnNzZdf9Tc0DedYAVzTSFY8IhS_hjPL3mN-L9TcwyoCBi5iKdX4RcfX6ZD10I1-J2062SsI8NXzfRvqF7OYXEtduHZPMCLiyW9Chg3gpoEmmxH6_y_8UsnQRY5y9WRkPsapOEIJ7Y',
    category: 'healthy'
  },
  {
    id: '4',
    name: 'Cold Brew Green Tea',
    price: 2.50,
    weight: '350ml',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgELRXumnqpTpwVFH50ik-jGNtjEj4rA5Si8f8AK9PDXCkx_CqX8iaLbIoYsbvX13fYdzpV85fFtsuBiFUmCD5L4gy8csT__JDPvk5DmCs_PxOXrpjbCtGuJaCJZlXQSXqNd15CobNlP41KGK4Hvk9hIb9R_pW5uc2BGq6TFEP4bmoRcaPuhPwRAfGWwMYd9W3GxlV-Wx3Sksm58N2fQbOHZ_5kBcqHncmjdgPb3sr5veHArVxWsAuhdt7oKcuOaruj7SNlnC5ssw',
    category: 'drinks'
  },
  {
    id: '5',
    name: 'Truffle Potato Chips',
    price: 3.99,
    weight: '110g',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1F0hNvnERTC-UJpAOYvWgZIJmUH6tvXOUYPnG6L8sr-2duatbaDiMpzYJ_TjGBs4VHTHtx2Zk9rBodi8SFD-8E3qsUvxXgjCIeTv_r66v2OVmOvKU7Q1wjgiXeXQgm_HEenIFYvpgwH4iEm2W55D1w-Wtz7JuVm5jdvyt8r2U4_wyRBT9v97AdIRPiRPo4Q8keBxWrPLtnzfAGoFGRFm7Hj6yn5ruquTgmmLQfuyHC0f0DkxgMginBImFhtnylBNMQWbBFcXnyxA',
    category: 'chips'
  },
  {
    id: '6',
    name: 'Dark Chocolate Bar',
    price: 5.25,
    weight: '80g',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD98ykrcMVxP-OUIrV2xs2CIWJV7Ru0DNSYelW0j5AXbM5HeEl-UyQkENwxPJENc_JW0ozqqg3mAWcYuicP0tCIOvhjUYsHMm7uwgHOen9zjd5yVLobsewguYtGWHSv0QlPmGWURaCO8CWqop5Gzchf4rq-Crf-9pT_l5Zz_NBgCMlAHFdDN659liN2SUFWWhxmpeBnkuULtcz9Ua07GvxuKWfHz1zufUwUGdM_XFIwqL5upvqEZx4hlLDdqzE1aE901QQKOdCoyuQ',
    category: 'sweets'
  },
  {
    id: '7',
    name: 'Vintage Cheddar Wedges',
    price: 4.20,
    weight: '90g',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMtL6iG3-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG',
    category: 'chips'
  },
  {
    id: '8',
    name: 'Sparkling Lemonade',
    price: 1.95,
    weight: '330ml',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8vL6iG3-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG-X8n8rFv59-X8kU6KzX8_X7kG',
    category: 'drinks'
  }
];

export const HIGHLIGHTS = [
  {
    id: 'h1',
    name: 'Truffle Potato Chips',
    info: 'Starting at $3.99',
    badge: 'New',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1F0hNvnERTC-UJpAOYvWgZIJmUH6tvXOUYPnG6L8sr-2duatbaDiMpzYJ_TjGBs4VHTHtx2Zk9rBodi8SFD-8E3qsUvxXgjCIeTv_r66v2OVmOvKU7Q1wjgiXeXQgm_HEenIFYvpgwH4iEm2W55D1w-Wtz7JuVm5jdvyt8r2U4_wyRBT9v97AdIRPiRPo4Q8keBxWrPLtnzfAGoFGRFm7Hj6yn5ruquTgmmLQfuyHC0f0DkxgMginBImFhtnylBNMQWbBFcXnyxA'
  },
  {
    id: 'h2',
    name: 'Dark Cocoa Bliss',
    info: 'Organic selection',
    badge: 'Limited',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD98ykrcMVxP-OUIrV2xs2CIWJV7Ru0DNSYelW0j5AXbM5HeEl-UyQkENwxPJENc_JW0ozqqg3mAWcYuicP0tCIOvhjUYsHMm7uwgHOen9zjd5yVLobsewguYtGWHSv0QlPmGWURaCO8CWqop5Gzchf4rq-Crf-9pT_l5Zz_NBgCMlAHFdDN659liN2SUFWWhxmpeBnkuULtcz9Ua07GvxuKWfHz1zufUwUGdM_XFIwqL5upvqEZx4hlLDdqzE1aE901QQKOdCoyuQ'
  }
];
