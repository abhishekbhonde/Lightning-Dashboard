interface SupplierRecord {
    month: string;
    bags: number;
  }
  
  interface CustomerRecord {
    month: string;
    bags: number;
  }
  
  interface TopSellingProduct {
    item: string;
    weight: number;
  }
  
  interface SupplierPayment {
    record_no: number;
    farmer_name: string;
    net_amount: string;
    paid_amount: string;
    due_amount: number;
    payment_status: string;
  }
  
  interface CustomerPayment {
    record_no: number;
    customer_name: string;
    payment_date: string;
    paid_amount: string;
    voucher_no: number;
    payment_mode: string;
  }
  
interface Data {
    date: string;
    total_sales: string;
    total_expenses: string;
    net_profit: string;
    due_amount: string;
    payment_received: string;
    supplier_records: SupplierRecord[];
    customer_records: CustomerRecord[];
    top_selling_products: TopSellingProduct[];
    supplier_payments: SupplierPayment[];
    customer_payments: CustomerPayment[];
  }
  
export const data: Data[] = [

    {
      "date": "01-01-2025",
      "total_sales": "53,032.13",
      "total_expenses": "66,289.87",
      "net_profit": "33,960.08",
      "due_amount": "18,924.43",
      "payment_received": "14,952.70",
      "supplier_records": [
        {
          "month": "January",
          "bags": 4211
        },
        {
          "month": "February",
          "bags": 8419
        },
        {
          "month": "March",
          "bags": 1492
        },
        {
          "month": "April",
          "bags": 3199
        },
        {
          "month": "May",
          "bags": 8112
        },
        {
          "month": "June",
          "bags": 8669
        },
        {
          "month": "July",
          "bags": 2765
        }
      ],
      "customer_records": [
        {
          "month": "January",
          "bags": 4010
        },
        {
          "month": "February",
          "bags": 8221
        },
        {
          "month": "March",
          "bags": 3673
        },
        {
          "month": "April",
          "bags": 5449
        },
        {
          "month": "May",
          "bags": 7385
        },
        {
          "month": "June",
          "bags": 7614
        },
        {
          "month": "July",
          "bags": 4174
        }
      ],
      "top_selling_products": [
        {
          "item": "Carrot",
          "weight": 242
        },
        {
          "item": "Garlic",
          "weight": 507
        },
        {
          "item": "Potato",
          "weight": 232
        },
        {
          "item": "Onion",
          "weight": 177
        },
        {
          "item": "Tomato",
          "weight": 446
        }
      ],
      "supplier_payments": [
        {
          "record_no": 10752,
          "farmer_name": "Lindsey Solis",
          "net_amount": "87,374.75",
          "paid_amount": "66,994.47",
          "due_amount": 748.24,
          "payment_status": "Pending"
        },
        {
          "record_no": 10753,
          "farmer_name": "Janie Rosario",
          "net_amount": "33,348.98",
          "paid_amount": "85,032.48",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10754,
          "farmer_name": "Fry Hale",
          "net_amount": "70,993.99",
          "paid_amount": "75,949.68",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10755,
          "farmer_name": "Lucas Fleming",
          "net_amount": "59,034.98",
          "paid_amount": "66,734.71",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10756,
          "farmer_name": "Valentine Waller",
          "net_amount": "70,782.02",
          "paid_amount": "54,095.32",
          "due_amount": 0.0,
          "payment_status": "Paid"
        }
      ],
      "customer_payments": [
        {
          "record_no": 6656,
          "customer_name": "Bridgette Hatfield",
          "payment_date": "27-11-2017",
          "paid_amount": "68,199.89",
          "voucher_no": 512,
          "payment_mode": "CHEQUE"
        },
        {
          "record_no": 6657,
          "customer_name": "Hancock Joyce",
          "payment_date": "13-03-2015",
          "paid_amount": "21,733.45",
          "voucher_no": 513,
          "payment_mode": "CHEQUE"
        },
        {
          "record_no": 6658,
          "customer_name": "Kerry Serrano",
          "payment_date": "19-11-2024",
          "paid_amount": "71,600.68",
          "voucher_no": 514,
          "payment_mode": "UPI"
        },
        {
          "record_no": 6659,
          "customer_name": "Goodman Duran",
          "payment_date": "18-08-2020",
          "paid_amount": "66,999.44",
          "voucher_no": 515,
          "payment_mode": "NEFT"
        },
        {
          "record_no": 6660,
          "customer_name": "Natasha Schultz",
          "payment_date": "02-10-2019",
          "paid_amount": "34,556.94",
          "voucher_no": 516,
          "payment_mode": "CASH"
        }
      ]
    },
    {
      "date": "02-01-2025",
      "total_sales": "45,451.03",
      "total_expenses": "75,586.78",
      "net_profit": "19,989.20",
      "due_amount": "34,916.86",
      "payment_received": "53,408.95",
      "supplier_records": [
        {
          "month": "January",
          "bags": 5552
        },
        {
          "month": "February",
          "bags": 1063
        },
        {
          "month": "March",
          "bags": 5752
        },
        {
          "month": "April",
          "bags": 2650
        },
        {
          "month": "May",
          "bags": 1934
        },
        {
          "month": "June",
          "bags": 1842
        },
        {
          "month": "July",
          "bags": 4601
        }
      ],
      "customer_records": [
        {
          "month": "January",
          "bags": 2619
        },
        {
          "month": "February",
          "bags": 6588
        },
        {
          "month": "March",
          "bags": 4665
        },
        {
          "month": "April",
          "bags": 1176
        },
        {
          "month": "May",
          "bags": 7471
        },
        {
          "month": "June",
          "bags": 1950
        },
        {
          "month": "July",
          "bags": 3466
        }
      ],
      "top_selling_products": [
        {
          "item": "Potato",
          "weight": 222
        },
        {
          "item": "Tomato",
          "weight": 446
        },
        {
          "item": "Garlic",
          "weight": 331
        },
        {
          "item": "Onion",
          "weight": 411
        },
        {
          "item": "Carrot",
          "weight": 246
        }
      ],
      "supplier_payments": [
        {
          "record_no": 10752,
          "farmer_name": "Nell Cooley",
          "net_amount": "87,246.25",
          "paid_amount": "72,074.92",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10753,
          "farmer_name": "Kara Romero",
          "net_amount": "15,840.98",
          "paid_amount": "41,369.48",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10754,
          "farmer_name": "Potter Cash",
          "net_amount": "32,709.36",
          "paid_amount": "50,402.38",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10755,
          "farmer_name": "Ada Ingram",
          "net_amount": "70,356.45",
          "paid_amount": "34,057.76",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10756,
          "farmer_name": "Toni Mason",
          "net_amount": "67,219.58",
          "paid_amount": "53,109.71",
          "due_amount": 667.77,
          "payment_status": "Pending"
        }
      ],
      "customer_payments": [
        {
          "record_no": 6656,
          "customer_name": "Cobb Bullock",
          "payment_date": "10-11-2020",
          "paid_amount": "47,526.18",
          "voucher_no": 512,
          "payment_mode": "NEFT"
        },
        {
          "record_no": 6657,
          "customer_name": "Glenda Bates",
          "payment_date": "13-07-2023",
          "paid_amount": "73,612.04",
          "voucher_no": 513,
          "payment_mode": "CASH"
        },
        {
          "record_no": 6658,
          "customer_name": "Maritza Davis",
          "payment_date": "19-01-2014",
          "paid_amount": "19,229.11",
          "voucher_no": 514,
          "payment_mode": "RTGS"
        },
        {
          "record_no": 6659,
          "customer_name": "Riddle Garrett",
          "payment_date": "06-04-2018",
          "paid_amount": "44,696.30",
          "voucher_no": 515,
          "payment_mode": "NEFT"
        },
        {
          "record_no": 6660,
          "customer_name": "Goodwin Lopez",
          "payment_date": "25-03-2016",
          "paid_amount": "14,994.60",
          "voucher_no": 516,
          "payment_mode": "CHEQUE"
        }
      ]
    },
    {
      "date": "03-01-2025",
      "total_sales": "25,045.78",
      "total_expenses": "37,575.45",
      "net_profit": "76,028.31",
      "due_amount": "71,601.16",
      "payment_received": "23,295.49",
      "supplier_records": [
        {
          "month": "January",
          "bags": 4831
        },
        {
          "month": "February",
          "bags": 1215
        },
        {
          "month": "March",
          "bags": 1019
        },
        {
          "month": "April",
          "bags": 3668
        },
        {
          "month": "May",
          "bags": 7587
        },
        {
          "month": "June",
          "bags": 7800
        },
        {
          "month": "July",
          "bags": 6505
        }
      ],
      "customer_records": [
        {
          "month": "January",
          "bags": 1296
        },
        {
          "month": "February",
          "bags": 4603
        },
        {
          "month": "March",
          "bags": 6595
        },
        {
          "month": "April",
          "bags": 5367
        },
        {
          "month": "May",
          "bags": 7334
        },
        {
          "month": "June",
          "bags": 3186
        },
        {
          "month": "July",
          "bags": 5251
        }
      ],
      "top_selling_products": [
        {
          "item": "Onion",
          "weight": 241
        },
        {
          "item": "Garlic",
          "weight": 104
        },
        {
          "item": "Potato",
          "weight": 331
        },
        {
          "item": "Tomato",
          "weight": 118
        },
        {
          "item": "Carrot",
          "weight": 329
        }
      ],
      "supplier_payments": [
        {
          "record_no": 10752,
          "farmer_name": "Jaime Little",
          "net_amount": "67,934.60",
          "paid_amount": "48,385.04",
          "due_amount": 458.75,
          "payment_status": "Pending"
        },
        {
          "record_no": 10753,
          "farmer_name": "Queen Zamora",
          "net_amount": "38,628.91",
          "paid_amount": "35,352.43",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10754,
          "farmer_name": "Kayla Ray",
          "net_amount": "88,596.31",
          "paid_amount": "27,635.97",
          "due_amount": 342.4,
          "payment_status": "Pending"
        },
        {
          "record_no": 10755,
          "farmer_name": "Catalina Maxwell",
          "net_amount": "38,791.73",
          "paid_amount": "80,730.03",
          "due_amount": 234.46,
          "payment_status": "Pending"
        },
        {
          "record_no": 10756,
          "farmer_name": "Nettie Hoover",
          "net_amount": "68,128.43",
          "paid_amount": "80,587.89",
          "due_amount": 642.28,
          "payment_status": "Pending"
        }
      ],
      "customer_payments": [
        {
          "record_no": 6656,
          "customer_name": "Morrison Yang",
          "payment_date": "10-02-2019",
          "paid_amount": "15,800.45",
          "voucher_no": 512,
          "payment_mode": "UPI"
        },
        {
          "record_no": 6657,
          "customer_name": "Kaufman Rich",
          "payment_date": "17-02-2022",
          "paid_amount": "70,546.56",
          "voucher_no": 513,
          "payment_mode": "CASH"
        },
        {
          "record_no": 6658,
          "customer_name": "Lenore Conley",
          "payment_date": "29-04-2017",
          "paid_amount": "86,848.49",
          "voucher_no": 514,
          "payment_mode": "NEFT"
        },
        {
          "record_no": 6659,
          "customer_name": "Estela Bush",
          "payment_date": "23-06-2018",
          "paid_amount": "22,102.23",
          "voucher_no": 515,
          "payment_mode": "RTGS"
        },
        {
          "record_no": 6660,
          "customer_name": "Mitchell Bradley",
          "payment_date": "14-10-2018",
          "paid_amount": "36,490.74",
          "voucher_no": 516,
          "payment_mode": "CHEQUE"
        }
      ]
    },
    {
      "date": "04-01-2025",
      "total_sales": "81,732.51",
      "total_expenses": "17,160.39",
      "net_profit": "59,710.40",
      "due_amount": "19,195.58",
      "payment_received": "36,540.20",
      "supplier_records": [
        {
          "month": "January",
          "bags": 8434
        },
        {
          "month": "February",
          "bags": 5960
        },
        {
          "month": "March",
          "bags": 4949
        },
        {
          "month": "April",
          "bags": 7545
        },
        {
          "month": "May",
          "bags": 5246
        },
        {
          "month": "June",
          "bags": 3466
        },
        {
          "month": "July",
          "bags": 3926
        }
      ],
      "customer_records": [
        {
          "month": "January",
          "bags": 3551
        },
        {
          "month": "February",
          "bags": 3003
        },
        {
          "month": "March",
          "bags": 8975
        },
        {
          "month": "April",
          "bags": 4195
        },
        {
          "month": "May",
          "bags": 7102
        },
        {
          "month": "June",
          "bags": 6589
        },
        {
          "month": "July",
          "bags": 4484
        }
      ],
      "top_selling_products": [
        {
          "item": "Garlic",
          "weight": 160
        },
        {
          "item": "Tomato",
          "weight": 394
        },
        {
          "item": "Onion",
          "weight": 295
        },
        {
          "item": "Potato",
          "weight": 199
        },
        {
          "item": "Carrot",
          "weight": 284
        }
      ],
      "supplier_payments": [
        {
          "record_no": 10752,
          "farmer_name": "Kemp Burks",
          "net_amount": "25,469.88",
          "paid_amount": "40,507.94",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10753,
          "farmer_name": "Lawanda Thompson",
          "net_amount": "80,298.96",
          "paid_amount": "16,079.85",
          "due_amount": 629.63,
          "payment_status": "Pending"
        },
        {
          "record_no": 10754,
          "farmer_name": "Jordan Parks",
          "net_amount": "70,392.10",
          "paid_amount": "63,144.69",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10755,
          "farmer_name": "Justice Washington",
          "net_amount": "32,667.33",
          "paid_amount": "85,705.78",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10756,
          "farmer_name": "Connie Booth",
          "net_amount": "19,734.97",
          "paid_amount": "88,996.15",
          "due_amount": 0.0,
          "payment_status": "Paid"
        }
      ],
      "customer_payments": [
        {
          "record_no": 6656,
          "customer_name": "Lynn Vaughn",
          "payment_date": "30-06-2015",
          "paid_amount": "81,432.86",
          "voucher_no": 512,
          "payment_mode": "UPI"
        },
        {
          "record_no": 6657,
          "customer_name": "Ava Castaneda",
          "payment_date": "31-08-2015",
          "paid_amount": "77,386.75",
          "voucher_no": 513,
          "payment_mode": "RTGS"
        },
        {
          "record_no": 6658,
          "customer_name": "Le Blackwell",
          "payment_date": "07-04-2018",
          "paid_amount": "67,704.54",
          "voucher_no": 514,
          "payment_mode": "RTGS"
        },
        {
          "record_no": 6659,
          "customer_name": "Avis Velez",
          "payment_date": "13-10-2016",
          "paid_amount": "65,068.62",
          "voucher_no": 515,
          "payment_mode": "CASH"
        },
        {
          "record_no": 6660,
          "customer_name": "Keith Mays",
          "payment_date": "01-10-2023",
          "paid_amount": "59,197.58",
          "voucher_no": 516,
          "payment_mode": "RTGS"
        }
      ]
    },
    {
      "date": "05-01-2025",
      "total_sales": "33,646.69",
      "total_expenses": "36,622.52",
      "net_profit": "11,337.41",
      "due_amount": "48,589.81",
      "payment_received": "74,091.42",
      "supplier_records": [
        {
          "month": "January",
          "bags": 8730
        },
        {
          "month": "February",
          "bags": 7877
        },
        {
          "month": "March",
          "bags": 3687
        },
        {
          "month": "April",
          "bags": 3862
        },
        {
          "month": "May",
          "bags": 6039
        },
        {
          "month": "June",
          "bags": 7465
        },
        {
          "month": "July",
          "bags": 2918
        }
      ],
      "customer_records": [
        {
          "month": "January",
          "bags": 3161
        },
        {
          "month": "February",
          "bags": 4487
        },
        {
          "month": "March",
          "bags": 7681
        },
        {
          "month": "April",
          "bags": 6477
        },
        {
          "month": "May",
          "bags": 4266
        },
        {
          "month": "June",
          "bags": 2303
        },
        {
          "month": "July",
          "bags": 6315
        }
      ],
      "top_selling_products": [
        {
          "item": "Carrot",
          "weight": 572
        },
        {
          "item": "Potato",
          "weight": 215
        },
        {
          "item": "Garlic",
          "weight": 104
        },
        {
          "item": "Tomato",
          "weight": 206
        },
        {
          "item": "Onion",
          "weight": 243
        }
      ],
      "supplier_payments": [
        {
          "record_no": 10752,
          "farmer_name": "Harrington Yang",
          "net_amount": "74,963.08",
          "paid_amount": "61,235.17",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10753,
          "farmer_name": "Sanders Fitzpatrick",
          "net_amount": "64,555.96",
          "paid_amount": "39,888.16",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10754,
          "farmer_name": "Faye Morse",
          "net_amount": "57,142.02",
          "paid_amount": "73,405.36",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10755,
          "farmer_name": "Ericka Maynard",
          "net_amount": "30,370.08",
          "paid_amount": "14,532.53",
          "due_amount": 0.0,
          "payment_status": "Paid"
        },
        {
          "record_no": 10756,
          "farmer_name": "Edith Ray",
          "net_amount": "84,514.13",
          "paid_amount": "84,132.50",
          "due_amount": 0.0,
          "payment_status": "Paid"
        }
      ],
      "customer_payments": [
        {
          "record_no": 6656,
          "customer_name": "Casey Trevino",
          "payment_date": "11-07-2017",
          "paid_amount": "55,055.45",
          "voucher_no": 512,
          "payment_mode": "RTGS"
        },
        {
          "record_no": 6657,
          "customer_name": "Webster Goff",
          "payment_date": "17-05-2022",
          "paid_amount": "85,618.91",
          "voucher_no": 513,
          "payment_mode": "CASH"
        },
        {
          "record_no": 6658,
          "customer_name": "Blackwell Mckay",
          "payment_date": "31-08-2024",
          "paid_amount": "58,214.25",
          "voucher_no": 514,
          "payment_mode": "UPI"
        },
        {
          "record_no": 6659,
          "customer_name": "Robinson Pacheco",
          "payment_date": "01-09-2017",
          "paid_amount": "17,588.90",
          "voucher_no": 515,
          "payment_mode": "RTGS"
        },
        {
          "record_no": 6660,
          "customer_name": "Floyd Mclean",
          "payment_date": "06-04-2021",
          "paid_amount": "61,028.82",
          "voucher_no": 516,
          "payment_mode": "UPI"
        }
      ]
    }

];