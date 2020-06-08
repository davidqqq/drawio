export default {
    "name": "/",
    "parent": "/root",
    "isEndPoint": "false",
    "onVulnerablePath": "true",
    "otherDetails": "",
    "children": [
    {
    "name": "/v1",
    "parent": "/",
    "isEndPoint": "false",
    "onVulnerablePath": "true",
    "otherDetails": "",
    "children": [
    {
        "name": "/sample",
        "parent": "/v1",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,AdapterInfoJsonV300|ErrorUserNotLoggedIn"
    },
    {
        "name": "/load",
        "parent": "/v1",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,AdapterInfoJsonV300|ErrorUserNotLoggedIn"
    },
    {
        "name": "/swagger",
        "parent": "/v1",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,AdapterInfoJsonV300|ErrorUserNotLoggedIn"
    },
    ]}]

}
