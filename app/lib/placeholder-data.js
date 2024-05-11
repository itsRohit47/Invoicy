// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544c3-4001-4271-9855-fec4b6a6442a',
    name: 'Rohit',
    email: 'rohit@invoicy.com.au',
    password: 'save_climate',
  },
];

const customers = [
  {
    id: '12345678-9012-3456-7890-123456789012',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '23456789-0123-4567-8901-234567890123',
    name: 'Sania Jain',
    email: 'sania.jain@example.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '34567890-1234-5678-9012-345678901234',
    name: 'Rohan Kumar',
    email: 'rohan.kumar@example.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '45678901-2345-6789-0123-456789012345',
    name: 'Priya Singh',
    email: 'priya.singh@example.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '56789012-3456-7890-1234-567890123456',
    name: 'Kunal Gupta',
    email: 'kunal.gupta@example.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '67890123-4567-8901-2345-678901234567',
    name: 'Neha Patel',
    email: 'neha.patel@example.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '78901234-5678-9012-3456-789012345678',
    name: 'Vishal Agarwal',
    email: 'vishal.agarwal@example.com',
    image_url: '/customers/lee-robinson.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
