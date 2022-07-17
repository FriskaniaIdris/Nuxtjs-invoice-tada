//state
export const state = () => ({
  invoiceData: []
})

//getters
export const getters = {
  getInvoiceData(state) {
    return state.invoiceData
  }
}

//actions
export const actions = {
  setDefaultInvoice({commit}){
    const invoiceData = [
      {
        "invoiceNumber": 'RT3080',
        "dueDate": '2021-08-19',
        "name": 'Jensen Huang',
        "amount": '1800.90',
        "status": 'Paid',
        "terms": '30',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "200.90"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00"
        },{
          "itemName": "Letter Design",
          "qty": 6,
          "price": "200.00"
        }],
        "billFrom": {
          "streetAddress": "20 City Park",
          "city": "London",
          "postCode": "E13EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "huang.jensen@gmail.com",
          "streetAddress": "Belleza Broadway",
          "city": "London",
          "postCode": "E13EZ",
          "country": "United Kingdom",
        }
      },
      {
        "invoiceNumber": 'XM9141',
        "dueDate": '2021-09-20',
        "name": 'Alex Grim',
        "amount": '556.00',
        "status": 'Pending',
        "terms": '30',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "156.00",
          "total": "156.00"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00",
          "total": "400.00"
        }],
        "billFrom": {
          "streetAddress": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "alexgrim@mail.com",
          "streetAddress": "84 Cruch Way",
          "city": "BradFord",
          "postCode": "BD1 9PB",
          "country": "United Kingdom",
        }
      },
      {
        "invoiceNumber": 'RG0314',
        "dueDate": '2021-10-01',
        "name": 'John Morrison',
        "amount": '14002.33',
        "status": 'Paid',
        "terms": '30',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "156.00",
          "total": "156.00"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00",
          "total": "400.00"
        }],
        "billFrom": {
          "streetAddress": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "alexgrim@mail.com",
          "streetAddress": "84 Cruch Way",
          "city": "BradFord",
          "postCode": "BD1 9PB",
          "country": "United Kingdom",
        }
      },
      {
        "invoiceNumber": 'RT2080',
        "dueDate": '2021-10-12',
        "name": 'Alysa Werner',
        "amount": '102.04',
        "status": 'Pending',
        "terms": '30',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "156.00",
          "total": "156.00"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00",
          "total": "400.00"
        }],
        "billFrom": {
          "streetAddress": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "alexgrim@mail.com",
          "streetAddress": "84 Cruch Way",
          "city": "BradFord",
          "postCode": "BD1 9PB",
          "country": "United Kingdom",
        }
      },
      {
        "invoiceNumber": 'AA1449',
        "dueDate": '2021-10-14',
        "name": 'Mellisa Clarke',
        "amount": '4032.33',
        "status": 'Pending',
        "terms": '90',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "156.00",
          "total": "156.00"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00",
          "total": "400.00"
        }],
        "billFrom": {
          "streetAddress": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "alexgrim@mail.com",
          "streetAddress": "84 Cruch Way",
          "city": "BradFord",
          "postCode": "BD1 9PB",
          "country": "United Kingdom",
        }
      },
      {
        "invoiceNumber": 'TY9141',
        "dueDate": '2021-10-31',
        "name": 'Thomas Wayne',
        "amount": '6155.91',
        "status": 'Pending',
        "terms": '90',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "156.00",
          "total": "156.00"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00",
          "total": "400.00"
        }],
        "billFrom": {
          "streetAddress": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "alexgrim@mail.com",
          "streetAddress": "84 Cruch Way",
          "city": "BradFord",
          "postCode": "BD1 9PB",
          "country": "United Kingdom",
        }
      },
      {
        "invoiceNumber": 'IV2353',
        "dueDate": '2021-11-12',
        "name": 'Anita Wainwright',
        "amount": '3102.04',
        "status": 'Draft',
        "terms": '90',
        "projectDesc": 'Graphic Designer',
        "itemList": [{
          "itemName": "Banner Design",
          "qty": 1,
          "price": "156.00",
          "total": "156.00"
        },{
          "itemName": "Email Design",
          "qty": 2,
          "price": "200.00",
          "total": "400.00"
        }],
        "billFrom": {
          "streetAddress": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom",
        },
        "billTo": {
          "email": "alexgrim@mail.com",
          "streetAddress": "84 Cruch Way",
          "city": "BradFord",
          "postCode": "BD1 9PB",
          "country": "United Kingdom",
        }
      }
    ]
    if(localStorage.getItem("invoiceData") === null){
      localStorage.setItem('invoiceData', JSON.stringify(invoiceData))
      commit("setDefaultInvoice", invoiceData)
    }else{
      commit("setDefaultInvoice", JSON.parse(localStorage.getItem("invoiceData")))
    }
    return invoiceData
  }
}

//mutations
export const mutations = {
  setDefaultInvoice(state, localData){
    state.invoiceData = localData
  },
  addInvoice(state, invoiceData){
    state.invoiceData.push(invoiceData)
    localStorage.removeItem('invoiceData')
    localStorage.setItem('invoiceData', JSON.stringify(state.invoiceData))
  },
  removeInvoice(state, invoiceNumber){
    state.invoiceData.splice(state.invoiceData.findIndex(invoice => invoice.invoiceNumber == invoiceNumber), 1)
    localStorage.removeItem('invoiceData')
    localStorage.setItem('invoiceData', JSON.stringify(state.invoiceData))
  },
  editInvoice(state, invoiceData){
    state.invoiceData[data.index] = invoiceData
    localStorage.removeItem('invoiceData')
    localStorage.setItem('invoiceData', JSON.stringify(state.invoiceData))
  },
  updateInvoiceStatus(state, data){
    state.invoiceData[data.index].status = data.status
    localStorage.removeItem('invoiceData')
    localStorage.setItem('invoiceData', JSON.stringify(state.invoiceData))
  }
}
