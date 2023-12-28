# EasyCashByKpv.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProfile**](AuthApi.md#getProfile) | **GET** /auth/profile | Auth Profile
[**otp**](AuthApi.md#otp) | **POST** /auth/otp | Genarate OTP
[**signIn**](AuthApi.md#signIn) | **POST** /auth/login | Auth login



## getProfile

> getProfile()

Auth Profile

### Example

```javascript
import EasyCashByKpv from 'easy_cash_by_kpv';
let defaultClient = EasyCashByKpv.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EasyCashByKpv.AuthApi();
apiInstance.getProfile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## otp

> otp(oTPDto)

Genarate OTP

### Example

```javascript
import EasyCashByKpv from 'easy_cash_by_kpv';
let defaultClient = EasyCashByKpv.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EasyCashByKpv.AuthApi();
let oTPDto = new EasyCashByKpv.OTPDto(); // OTPDto | 
apiInstance.otp(oTPDto, (error, data, response) => {
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
 **oTPDto** | [**OTPDto**](OTPDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## signIn

> signIn(userAuthDto)

Auth login

### Example

```javascript
import EasyCashByKpv from 'easy_cash_by_kpv';
let defaultClient = EasyCashByKpv.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EasyCashByKpv.AuthApi();
let userAuthDto = new EasyCashByKpv.UserAuthDto(); // UserAuthDto | 
apiInstance.signIn(userAuthDto, (error, data, response) => {
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
 **userAuthDto** | [**UserAuthDto**](UserAuthDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

