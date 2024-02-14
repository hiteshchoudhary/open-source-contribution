# Making API Requests in C++

This example demonstrates the C++ way of making API requests using libcurl. It aims to showcase how to perform HTTP GET requests in C++.

## Motivation

This example serves as a demonstration of how to utilize libcurl, a popular C library for transferring data with URLs, to make API requests in C++. Understanding how to interact with APIs is essential for many software development projects.Showcasing a simple example, developers can grasp the fundamentals and build upon them for more complex applications.

## Code Snippet

```cpp
// Function to handle HTTP GET request
size_t writeCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
    size_t totalSize = size * nmemb;
    output->append((char*)contents, totalSize);
    return totalSize;
}

int main() {
    // Initialize libcurl
    curl_global_init(CURL_GLOBAL_ALL);
    CURL* curl = curl_easy_init();

    if (curl) {
        // Set up URL for API request
        std::string url = "https://example.com/restAPI";

        // Set up HTTP GET request
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);

        // Response buffer
        std::string response;

        // Set up callback function to handle response
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

        // Perform the request
        CURLcode res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        } else {
            // Successful request, print response
            std::cout << "Response from server: " << std::endl;
            std::cout << response << std::endl;
        }

        // Cleanup
        curl_easy_cleanup(curl);
    }

    // Cleanup libcurl
    curl_global_cleanup();

    return 0;
}
```
# Options

| Term                     | Explanation                                                                                                                                                                                                                              |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `size_t`                 | `size_t` is an unsigned integer type used for sizes of objects. It's commonly used to represent sizes of memory blocks, array sizes, or other objects. In this context, `nmemb` is of type `size_t` and represents the number of elements in an array. |
| `nmemb`                  | `nmemb` is a variable representing the number of elements in an array. It is typically of type `size_t` and used in functions where the size of an array or memory block is required. In this code, `nmemb` is used in the callback function `writeCallback`.                                  |
| `CURL`                   | `CURL` is a structure representing a curl handle, used to perform HTTP requests and interact with libcurl functionalities. In this code, `curl` is a pointer to a `CURL` handle initialized using `curl_easy_init()`.                                                                                  |
| `CURLOPT_URL`            | `CURLOPT_URL` is a libcurl option used to set the URL to which a request will be made. It accepts a string argument representing the URL. In this code, `CURLOPT_URL` is used to set the URL for the API request.                                                                         |
| `CURLOPT_FOLLOWLOCATION` | `CURLOPT_FOLLOWLOCATION` is a libcurl option used to enable or disable following HTTP 3xx redirections. It accepts a long integer argument, typically 1 for enabling or 0 for disabling. In this code, it's used to enable following redirections.                                              |
| `CURLOPT_WRITEFUNCTION`  | `CURLOPT_WRITEFUNCTION` is a libcurl option used to set a callback function that will be called to handle the received data. It accepts a function pointer to the callback function. In this code, it's set to `writeCallback` to handle the response.                                                |
| `CURLOPT_WRITEDATA`      | `CURLOPT_WRITEDATA` is a libcurl option used to set a pointer to user-defined data that will be passed to the write callback function specified by `CURLOPT_WRITEFUNCTION`. In this code, it's set to the address of the `response` string to store the received data.                                     |
| `curl_easy_perform`      | `curl_easy_perform` is a function used to perform the configured HTTP request using the provided curl handle (`CURL`). It returns a `CURLcode` indicating the success or failure of the request. In this code, it's used to execute the GET request.                                                    |
| `curl_easy_strerror`     | `curl_easy_strerror` is a function used to get a human-readable error message corresponding to a given `CURLcode`. It returns a string describing the error. In this code, it's used to print error messages if the request fails.                                                                          |
| `curl_easy_cleanup`      | `curl_easy_cleanup` is a function used to cleanup and free resources associated with a curl handle (`CURL`). In this code, it's used to release resources after the request is performed.                                                                                                            |
| `curl_global_cleanup`    | `curl_global_cleanup` is a function used to cleanup global libcurl resources. It should be called once for each call to `curl_global_init` to release resources acquired by libcurl. In this code, it's used to cleanup global resources after the request is performed.                                     |

