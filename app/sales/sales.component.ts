import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  form: FormGroup;
  loginError: boolean = false;

  dataSource = [{

    "column": [
      { "header": "Product ID", "field": "productID" },
      { "header": "Product name", "field": "productName" },
      {
        "header": "Sales", "subHeaders": [
          { "header": "2019Q1", "field": "salesQ1" },
          { "header": "2019Q2", "field": "salesQ2" },
          { "header": "2019Q3", "field": "salesQ3" },
          { "header": "2019Q4", "field": "salesQ4" }
        ]
      },
      { "header": "Total sales" }
    ],
    "data": [
      {
        "productID": "5068764589210",
        "productName": "Yukon Gold Potatos",
        "salesQ1": 120005,
        "salesQ2": 184557,
        "salesQ3": 150624,
        "salesQ4": 109383
      },
      {
        "productID": "5746890234585",
        "productName": "Butte Russet Potatos ",
        "salesQ1": 24005,
        "salesQ2": 284500,
        "salesQ3": 290657,
        "salesQ4": 350022
      },
      {
        "productID": "5449873501259",
        "productName": "Red Cloud Potatos",
        "salesQ1": 97800,
        "salesQ2": 85300,
        "salesQ3": 87458,
        "salesQ4": 100000
      },
      {
        "productID": "5639814580025",
        "productName": "Charlotte Potatos",
        "salesQ1": 97800,
        "salesQ2": 85300,
        "salesQ3": 87458,
        "salesQ4": 100000
      }
    ]
  }]

  constructor(public router: Router) { }

  ngOnInit() {

    const allSales = JSON.parse(sessionStorage.getItem('all'));

    if(allSales){
      this.dataSource[0].data = allSales;
    }

    const newSale = JSON.parse(sessionStorage.getItem('newSale'));

    if (newSale) {
      const dataLength = this.dataSource[0].data.length;
      this.dataSource[0].data[dataLength] = newSale;
      sessionStorage.removeItem('newSale');
      sessionStorage.setItem('all', JSON.stringify(this.dataSource[0].data));
    }
  }

  goToProduct() {
    this.router.navigate(['/product']);
  }
}