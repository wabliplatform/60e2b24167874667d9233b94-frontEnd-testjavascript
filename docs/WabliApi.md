# TempApi.WabliApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createwabli**](WabliApi.md#createwabli) | **POST** /wabli | Creates the data
[**deletewabli**](WabliApi.md#deletewabli) | **DELETE** /wabli/{wabliId} | Delete the element
[**getAllwabli**](WabliApi.md#getAllwabli) | **GET** /wabli/getAll | Get all the data
[**getwabli**](WabliApi.md#getwabli) | **GET** /wabli/{wabliId} | Get the element
[**updatewabli**](WabliApi.md#updatewabli) | **PUT** /wabli/{wabliId} | Updates the element



## createwabli

> Wabli createwabli(wabli)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WabliApi();
let wabli = new TempApi.Wabli(); // Wabli | data to be created
apiInstance.createwabli(wabli, (error, data, response) => {
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
 **wabli** | [**Wabli**](Wabli.md)| data to be created | 

### Return type

[**Wabli**](Wabli.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletewabli

> deletewabli(wabliId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WabliApi();
let wabliId = "wabliId_example"; // String | the Id parameter
apiInstance.deletewabli(wabliId, (error, data, response) => {
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
 **wabliId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllwabli

> [Wabli] getAllwabli()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WabliApi();
apiInstance.getAllwabli((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Wabli]**](Wabli.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getwabli

> Wabli getwabli(wabliId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WabliApi();
let wabliId = "wabliId_example"; // String | the Id parameter
apiInstance.getwabli(wabliId, (error, data, response) => {
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
 **wabliId** | **String**| the Id parameter | 

### Return type

[**Wabli**](Wabli.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatewabli

> Wabli updatewabli(wabliId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WabliApi();
let wabliId = "wabliId_example"; // String | the Id parameter
let opts = {
  'wabli': new TempApi.Wabli() // Wabli | data to be updated
};
apiInstance.updatewabli(wabliId, opts, (error, data, response) => {
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
 **wabliId** | **String**| the Id parameter | 
 **wabli** | [**Wabli**](Wabli.md)| data to be updated | [optional] 

### Return type

[**Wabli**](Wabli.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

