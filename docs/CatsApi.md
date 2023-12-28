# EasyCashByKpv.CatsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](CatsApi.md#create) | **POST** /cats | Create cat
[**findOne**](CatsApi.md#findOne) | **GET** /cats/{id} | 



## create

> create(createCatDto)

Create cat

### Example

```javascript
import EasyCashByKpv from 'easy_cash_by_kpv';
let defaultClient = EasyCashByKpv.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EasyCashByKpv.CatsApi();
let createCatDto = new EasyCashByKpv.CreateCatDto(); // CreateCatDto | 
apiInstance.create(createCatDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCatDto** | [**CreateCatDto**](CreateCatDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## findOne

> Cat findOne(id)



### Example

```javascript
import EasyCashByKpv from 'easy_cash_by_kpv';
let defaultClient = EasyCashByKpv.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EasyCashByKpv.CatsApi();
let id = 3.4; // Number | 
apiInstance.findOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Cat**](Cat.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

