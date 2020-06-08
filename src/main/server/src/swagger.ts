export default {
    "name": "/obp",
    "parent": "/root",
    "isEndPoint": "false",
    "onVulnerablePath": "true",
    "otherDetails": "",
    "children": [
    {
    "name": "/v4.0.0",
    "parent": "/obp",
    "isEndPoint": "false",
    "onVulnerablePath": "true",
    "otherDetails": "",
    "children": [
    {
        "name": "/accounts",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
        "name": "/public",
        "parent": "/accounts",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,BasicAccountsJSON|ErrorUserNotLoggedIn"
        }]
    },
    {
        "name": "/adapter",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,AdapterInfoJsonV300|ErrorUserNotLoggedIn"
    },
    {
        "name": "/api",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
        "name": "/glossary",
        "parent": "/api",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,GlossaryItemsJsonV300|ErrorUnknownError"
        }]
    },
    {
        "name": "/banks",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,BanksJSON|ErrorUnknownError##post,,BankJSONV220,BankJSONV220|ErrorInvalidJsonFormat",
        "children": [
        {
        "name": "/{BANK_ID}",
        "parent": "/banks",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,BANK_ID,,BankJSON|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/account-applications",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,AccountApplicationsJsonV310|ErrorUserNotLoggedIn##post,BANK_ID,AccountApplicationJson,AccountApplicationResponseJson|ErrorInvalidJsonFormat",
            "children": [
            {
            "name": "/{ACCOUNT_APPLICATION_ID}",
            "parent": "/account-applications",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,ACCOUNT_APPLICATION_ID|BANK_ID,,AccountApplicationResponseJson|ErrorUserNotLoggedIn##put,ACCOUNT_APPLICATION_ID|BANK_ID,AccountApplicationUpdateStatusJson,AccountApplicationResponseJson|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/account-web-hooks",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "put,BANK_ID,AccountWebhookPutJson,AccountWebhookJson|ErrorUnknownError##post,BANK_ID,AccountWebhookPostJson,AccountWebhookJson|ErrorUnknownError"
        },
        {
            "name": "/accounts",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,BasicAccountsJSON|ErrorBankNotFound",
            "children": [
            {
            "name": "/{ACCOUNT_ID}",
            "parent": "/accounts",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "put,ACCOUNT_ID|BANK_ID,CreateAccountJSONV220,CreateAccountJsonV310|ErrorInvalidJsonFormat##post,ACCOUNT_ID|BANK_ID,UpdateAccountJSON,SuccessMessage|ErrorInvalidJsonFormat",
            "children": [
            {
                "name": "/{VIEW_ID}",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/account",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,ModeratedAccountJSON400|ErrorBankNotFound"
                },
                {
                "name": "/checkbook",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                    "name": "/orders",
                    "parent": "/checkbook",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,CheckbookOrdersJson|ErrorUserNotLoggedIn"
                }]
                },
                {
                "name": "/counterparties",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,CounterpartiesJsonV220|ErrorUserNotLoggedIn##post,VIEW_ID|ACCOUNT_ID|BANK_ID,PostCounterpartyJSON,CounterpartyWithMetadataJson|ErrorUserNotLoggedIn",
                "children": [
                {
                    "name": "/{COUNTERPARTY_ID}",
                    "parent": "/counterparties",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "get,COUNTERPARTY_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,CounterpartyWithMetadataJson|ErrorUserNotLoggedIn"
                }]
                },
                {
                "name": "/credit_cards",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                    "name": "/orders",
                    "parent": "/credit_cards",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,CreditCardOrderStatusResponseJson|ErrorUserNotLoggedIn"
                }]
                },
                {
                "name": "/funds-available",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,CheckFundsAvailableJson|ErrorUserNotLoggedIn"
                },
                {
                "name": "/metadata",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                    "name": "/tags",
                    "parent": "/metadata",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,AccountTagsJSON|ErrorBankAccountNotFound##post,VIEW_ID|ACCOUNT_ID|BANK_ID,PostAccountTagJSON,AccountTagJSON|ErrorUserNotLoggedIn",
                    "children": [
                    {
                    "name": "/{TAG_ID}",
                    "parent": "/tags",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "delete,TAG_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorNoViewPermission"
                    }]
                }]
                },
                {
                "name": "/other_accounts",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,OtherAccountsJsonV300|ErrorUserNotLoggedIn",
                "children": [
                {
                    "name": "/{OTHER_ACCOUNT_ID}",
                    "parent": "/other_accounts",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "get,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,OtherAccountJsonV300|ErrorUserNotLoggedIn",
                    "children": [
                    {
                    "name": "/metadata",
                    "parent": "/{OTHER_ACCOUNT_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,OtherAccountMetadataJSON|ErrorUserNotLoggedIn",
                    "children": [
                    {
                        "name": "/corporate_location",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,CorporateLocationJSON,SuccessMessage|ErrorUserNotLoggedIn##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,CorporateLocationJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    },
                    {
                        "name": "/image_url",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,ImageUrlJSON,SuccessMessage|ErrorBankAccountNotFound##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,ImageUrlJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUnknownError"
                    },
                    {
                        "name": "/more_info",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,MoreInfoJSON,SuccessMessage|ErrorUserNotLoggedIn##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,MoreInfoJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    },
                    {
                        "name": "/open_corporates_url",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,OpenCorporateUrlJSON,SuccessMessage|ErrorUserNotLoggedIn##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,OpenCorporateUrlJSON,SuccessMessage|ErrorBankAccountNotFound##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    },
                    {
                        "name": "/physical_location",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PhysicalLocationJSON,SuccessMessage|ErrorUserNotLoggedIn##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PhysicalLocationJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    },
                    {
                        "name": "/url",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,UrlJSON,SuccessMessage|ErrorUserNotLoggedIn##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,UrlJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    }]
                    },
                    {
                    "name": "/private_alias",
                    "parent": "/{OTHER_ACCOUNT_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,AliasJSON|ErrorUserNotLoggedIn##put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,AliasJSON,SuccessMessage|ErrorUserNotLoggedIn##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,AliasJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    },
                    {
                    "name": "/public_alias",
                    "parent": "/{OTHER_ACCOUNT_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "get,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,AliasJSON|ErrorBankAccountNotFound##put,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,AliasJSON,SuccessMessage|ErrorBankAccountNotFound##post,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,AliasJSON,SuccessMessage|ErrorBankAccountNotFound##delete,OTHER_ACCOUNT_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorBankAccountNotFound"
                    }]
                }]
                },
                {
                "name": "/transaction-request-types",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionRequestTypesJsonV140|ErrorUserNotLoggedIn",
                "children": [
                {
                    "name": "/ACCOUNT",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/ACCOUNT",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionRequestBodyJsonV200,TransactionRequestWithChargeJSON210|ErrorUserNotLoggedIn"
                    }]
                },
                {
                    "name": "/ACCOUNT_OTP",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/ACCOUNT_OTP",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionRequestBodyJsonV200,TransactionRequestWithChargeJSON210|ErrorUserNotLoggedIn"
                    }]
                },
                {
                    "name": "/COUNTERPARTY",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/COUNTERPARTY",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionRequestBodyCounterpartyJSON,TransactionRequestWithChargeJSON210|ErrorUserNotLoggedIn"
                    }]
                },
                {
                    "name": "/FREE_FORM",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/FREE_FORM",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionRequestBodyFreeFormJSON,TransactionRequestWithChargeJSON210|ErrorUserNotLoggedIn"
                    }]
                },
                {
                    "name": "/SANDBOX_TAN",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/SANDBOX_TAN",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionRequestBodyJsonV200,TransactionRequestWithChargeJSON210|ErrorUserNotLoggedIn"
                    }]
                },
                {
                    "name": "/SEPA",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/SEPA",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionRequestBodySEPAJSON,TransactionRequestWithChargeJSON210|ErrorUserNotLoggedIn"
                    }]
                },
                {
                    "name": "/{TRANSACTION_REQUEST_TYPE}",
                    "parent": "/transaction-request-types",
                    "isEndPoint": "false",
                    "onVulnerablePath": "false",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transaction-requests",
                    "parent": "/{TRANSACTION_REQUEST_TYPE}",
                    "isEndPoint": "false",
                    "onVulnerablePath": "false",
                    "otherDetails": "",
                    "children": [
                    {
                        "name": "/{TRANSACTION_REQUEST_ID}",
                        "parent": "/transaction-requests",
                        "isEndPoint": "false",
                        "onVulnerablePath": "false",
                        "otherDetails": "",
                        "children": [
                        {
                        "name": "/challenge",
                        "parent": "/{TRANSACTION_REQUEST_ID}",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "post,TRANSACTION_REQUEST_ID|TRANSACTION_REQUEST_TYPE|VIEW_ID|ACCOUNT_ID|BANK_ID,ChallengeAnswerJSON,TransactionRequestWithChargeJson|ErrorUserNotLoggedIn"
                        }]
                    }]
                    }]
                }]
                },
                {
                "name": "/transaction-requests",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionRequestWithChargeJSONs210|ErrorUserNotLoggedIn"
                },
                {
                "name": "/transactions",
                "parent": "/{VIEW_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionsJsonV300|ErrorFilterSortDirectionError",
                "children": [
                {
                    "name": "/{TRANSACTION_ID}",
                    "parent": "/transactions",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/metadata",
                    "parent": "/{TRANSACTION_ID}",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                        "name": "/comments",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionCommentsJSON|ErrorUserNotLoggedIn##post,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PostTransactionCommentJSON,TransactionCommentJSON|ErrorUserNotLoggedIn",
                        "children": [
                        {
                        "name": "/{COMMENT_ID}",
                        "parent": "/comments",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "delete,COMMENT_ID|TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorBankAccountNotFound"
                        }]
                    },
                    {
                        "name": "/images",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "true",
                        "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionImagesJSON|ErrorUserNotLoggedIn##post,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PostTransactionImageJSON,TransactionImageJSON|ErrorInvalidJsonFormat",
                        "children": [
                        {
                        "name": "/{IMAGE_ID}",
                        "parent": "/images",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "delete,IMAGE_ID|TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorBankAccountNotFound"
                        }]
                    },
                    {
                        "name": "/narrative",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionNarrativeJSON|ErrorBankAccountNotFound##put,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionNarrativeJSON,SuccessMessage|ErrorInvalidJsonFormat##post,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,TransactionNarrativeJSON,SuccessMessage|ErrorInvalidJsonFormat##delete,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    },
                    {
                        "name": "/tags",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "true",
                        "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionTagJSON|ErrorBankAccountNotFound##post,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PostTransactionTagJSON,TransactionTagJSON|ErrorUserNotLoggedIn",
                        "children": [
                        {
                        "name": "/{TAG_ID}",
                        "parent": "/tags",
                        "isEndPoint": "true",
                        "onVulnerablePath": "false",
                        "otherDetails": "delete,TAG_ID|TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorNoViewPermission"
                        }]
                    },
                    {
                        "name": "/where",
                        "parent": "/metadata",
                        "isEndPoint": "true",
                        "onVulnerablePath": "true",
                        "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionWhereJSON|ErrorBankAccountNotFound##put,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PostTransactionWhereJSON,SuccessMessage|ErrorUserNotLoggedIn##post,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,PostTransactionWhereJSON,SuccessMessage|ErrorUserNotLoggedIn##delete,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    }]
                    },
                    {
                    "name": "/other_account",
                    "parent": "/{TRANSACTION_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,OtherAccountJSON|ErrorBankAccountNotFound"
                    },
                    {
                    "name": "/transaction",
                    "parent": "/{TRANSACTION_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,TRANSACTION_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionJSON|ErrorUserNotLoggedIn"
                    }]
                }]
                }]
            },
            {
                "name": "/permissions",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,ACCOUNT_ID|BANK_ID,,PermissionsJSON|ErrorUserNotLoggedIn",
                "children": [
                {
                "name": "/{PROVIDER}",
                "parent": "/permissions",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                    "name": "/{PROVIDER_ID}",
                    "parent": "/{PROVIDER}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "get,PROVIDER|PROVIDER_ID|ACCOUNT_ID|BANK_ID,,ViewsJsonV300|ErrorUserNotLoggedIn",
                    "children": [
                    {
                    "name": "/views",
                    "parent": "/{PROVIDER_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,PROVIDER|PROVIDER_ID|ACCOUNT_ID|BANK_ID,ViewIdsJson,ViewsJSONV121|ErrorUserNotLoggedIn##delete,PROVIDER|PROVIDER_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn",
                    "children": [
                    {
                        "name": "/{VIEW_ID}",
                        "parent": "/views",
                        "isEndPoint": "true",
                        "onVulnerablePath": "true",
                        "otherDetails": "post,PROVIDER|PROVIDER_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,ViewJSONV121|ErrorUserNotLoggedIn##delete,PROVIDER|PROVIDER_ID|VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                    }]
                    }]
                }]
                }]
            },
            {
                "name": "/products",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/{PRODUCT_CODE}",
                "parent": "/products",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                    "name": "/attribute",
                    "parent": "/{PRODUCT_CODE}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "post,PRODUCT_CODE|ACCOUNT_ID|BANK_ID,AccountAttributeJson,AccountAttributeResponseJson|ErrorUserNotLoggedIn"
                },
                {
                    "name": "/attributes",
                    "parent": "/{PRODUCT_CODE}",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/{ACCOUNT_ATTRIBUTE_ID}",
                    "parent": "/attributes",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "put,ACCOUNT_ATTRIBUTE_ID|PRODUCT_CODE|ACCOUNT_ID|BANK_ID,AccountAttributeJson,AccountAttributeResponseJson|ErrorUserNotLoggedIn"
                    }]
                }]
                }]
            },
            {
                "name": "/views",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,ACCOUNT_ID|BANK_ID,,ViewsJsonV300|ErrorUserNotLoggedIn##post,ACCOUNT_ID|BANK_ID,CreateViewJson,ViewJsonV300|ErrorUserNotLoggedIn",
                "children": [
                {
                "name": "/{VIEW_ID}",
                "parent": "/views",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,VIEW_ID|ACCOUNT_ID|BANK_ID,UpdateViewJSON,ViewJsonV300|ErrorInvalidJsonFormat##delete,VIEW_ID|ACCOUNT_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                }]
            }]
            },
            {
            "name": "/account_ids",
            "parent": "/accounts",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/private",
                "parent": "/account_ids",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,BANK_ID,,AccountsIdsJsonV300|ErrorUserNotLoggedIn"
            }]
            },
            {
            "name": "/private",
            "parent": "/accounts",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,CoreAccountsJsonV300|ErrorUserNotLoggedIn"
            },
            {
            "name": "/public",
            "parent": "/accounts",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,BasicAccountsJSON|ErrorUnknownError"
            }]
        },
        {
            "name": "/accounts-held",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,CoreAccountsHeldJsonV300|ErrorUnknownError"
        },
        {
            "name": "/adapter",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,AdapterInfoJsonV300|ErrorUserNotLoggedIn"
        },
        {
            "name": "/atms",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,AtmJsonV300|ErrorUserNotLoggedIn##post,BANK_ID,AtmJsonV300,AtmJsonV300|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{ATM_ID}",
            "parent": "/atms",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,ATM_ID|BANK_ID,,AtmJsonV300|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/balances",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,AccountsBalancesV310Json|ErrorUnknownError"
        },
        {
            "name": "/branches",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,BranchesJsonV300|ErrorUserNotLoggedIn##post,BANK_ID,BranchJsonV300,BranchJsonV300|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{BRANCH_ID}",
            "parent": "/branches",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BRANCH_ID|BANK_ID,,BranchJsonV300|ErrorUserNotLoggedIn##delete,BRANCH_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/consents",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/{CONSENT_ID}",
            "parent": "/consents",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/challenge",
                "parent": "/{CONSENT_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,CONSENT_ID|BANK_ID,PostConsentChallengeJsonV310,ConsentChallengeJsonV310|ErrorUserNotLoggedIn"
            }]
            }]
        },
        {
            "name": "/crm-events",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,CrmEventsJson|ErrorUserNotLoggedIn"
        },
        {
            "name": "/customer",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/{CUSTOMER_ID}",
            "parent": "/customer",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
                "name": "/messages",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "post,CUSTOMER_ID|BANK_ID,AddCustomerMessageJson,SuccessMessage|ErrorUserNotLoggedIn"
            }]
            },
            {
            "name": "/messages",
            "parent": "/customer",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,CustomerMessagesJson|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/customers",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,CustomerJSONs|ErrorUserNotLoggedIn##post,BANK_ID,PostCustomerJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{CUSTOMER_ID}",
            "parent": "/customers",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,CUSTOMER_ID|BANK_ID,,CustomerJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
                "name": "/address",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,CUSTOMER_ID|BANK_ID,PostCustomerAddressJsonV310,CustomerAddressJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/addresses",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,CUSTOMER_ID|BANK_ID,,CustomerAddressesJsonV310|ErrorUserNotLoggedIn",
                "children": [
                {
                "name": "/{CUSTOMER_ADDRESS_ID}",
                "parent": "/addresses",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ADDRESS_ID|CUSTOMER_ID|BANK_ID,PostCustomerAddressJsonV310,CustomerAddressJsonV310|ErrorUserNotLoggedIn##delete,CUSTOMER_ADDRESS_ID|CUSTOMER_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                }]
            },
            {
                "name": "/branch",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerBranchJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/credit-limit",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerCreditLimitJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/credit-rating-and-source",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerCreditRatingAndSourceJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/credit_limit",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                "name": "/requests",
                "parent": "/credit_limit",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "get,CUSTOMER_ID|BANK_ID,,CreditLimitOrderJson|ErrorUnknownError##post,CUSTOMER_ID|BANK_ID,CreditLimitRequestJson,CreditLimitOrderResponseJson|ErrorUnknownError",
                "children": [
                {
                    "name": "/{REQUEST_ID}",
                    "parent": "/requests",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,REQUEST_ID|CUSTOMER_ID|BANK_ID,,CreditLimitOrderJson|ErrorUnknownError"
                }]
                }]
            },
            {
                "name": "/data",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerDataJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/email",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerEmailJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/identity",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerIdentityJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/kyc_check",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                "name": "/{KYC_CHECK_ID}",
                "parent": "/kyc_check",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "put,KYC_CHECK_ID|CUSTOMER_ID|BANK_ID,PostKycCheckJSON,KycCheckJSON|ErrorUserNotLoggedIn"
                }]
            },
            {
                "name": "/kyc_documents",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                "name": "/{KYC_DOCUMENT_ID}",
                "parent": "/kyc_documents",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "put,KYC_DOCUMENT_ID|CUSTOMER_ID|BANK_ID,PostKycDocumentJSON,KycDocumentJSON|ErrorUserNotLoggedIn"
                }]
            },
            {
                "name": "/kyc_media",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                "name": "/{KYC_MEDIA_ID}",
                "parent": "/kyc_media",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "put,KYC_MEDIA_ID|CUSTOMER_ID|BANK_ID,PostKycMediaJSON,KycMediaJSON|ErrorUserNotLoggedIn"
                }]
            },
            {
                "name": "/kyc_statuses",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PostKycStatusJSON,KycStatusJSON|ErrorUserNotLoggedIn"
            },
            {
                "name": "/mobile-number",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerMobilePhoneNumberJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/number",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,CUSTOMER_ID|BANK_ID,PutUpdateCustomerNumberJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/social_media_handles",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,CUSTOMER_ID|BANK_ID,,SocialMediasJSON|ErrorUserNotLoggedIn##post,CUSTOMER_ID|BANK_ID,SocialMediaJSON,SuccessMessage|ErrorUserNotLoggedIn"
            },
            {
                "name": "/tax-residence",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,CUSTOMER_ID|BANK_ID,PostTaxResidenceJsonV310,TaxResidenceV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/tax-residences",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,CUSTOMER_ID|BANK_ID,,TaxResidenceJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/tax_residencies",
                "parent": "/{CUSTOMER_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/{TAX_RESIDENCE_ID}",
                "parent": "/tax_residencies",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "delete,TAX_RESIDENCE_ID|CUSTOMER_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
                }]
            }]
            },
            {
            "name": "/customer-number",
            "parent": "/customers",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "post,BANK_ID,PostCustomerNumberJsonV310,CustomerJsonV310|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/firehose",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/accounts",
            "parent": "/firehose",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/{ACCOUNT_ID}",
                "parent": "/accounts",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/views",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                    "name": "/{VIEW_ID}",
                    "parent": "/views",
                    "isEndPoint": "false",
                    "onVulnerablePath": "true",
                    "otherDetails": "",
                    "children": [
                    {
                    "name": "/transactions",
                    "parent": "/{VIEW_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,TransactionsJsonV300|ErrorUserNotLoggedIn"
                    }]
                }]
                }]
            },
            {
                "name": "/views",
                "parent": "/accounts",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/{VIEW_ID}",
                "parent": "/views",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,VIEW_ID|BANK_ID,,ModeratedCoreAccountsJsonV300|ErrorUserNotLoggedIn"
                }]
            }]
            },
            {
            "name": "/customers",
            "parent": "/firehose",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,CustomerJSONs|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/fx",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "put,BANK_ID,FXRateJsonV220,FXRateJsonV220|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{FROM_CURRENCY_CODE}",
            "parent": "/fx",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
                "name": "/{TO_CURRENCY_CODE}",
                "parent": "/{FROM_CURRENCY_CODE}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "get,TO_CURRENCY_CODE|FROM_CURRENCY_CODE|BANK_ID,,FXRateJsonV220|ErrorInvalidISOCurrencyCode"
            }]
            }]
        },
        {
            "name": "/meetings",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,MeetingsJsonV310|ErrorUserNotLoggedIn##post,BANK_ID,CreateMeetingJsonV310,MeetingJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{MEETING_ID}",
            "parent": "/meetings",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,MEETING_ID|BANK_ID,,MeetingJsonV310|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/my",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/consents",
            "parent": "/my",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,ConsentsJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
                "name": "/{CONSENT_ID}",
                "parent": "/consents",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/revoke",
                "parent": "/{CONSENT_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,CONSENT_ID|BANK_ID,,ConsentJsonV310|ErrorUserNotLoggedIn"
                }]
            },
            {
                "name": "/EMAIL",
                "parent": "/consents",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,BANK_ID,PostConsentEmailJsonV310,ConsentJsonV310|ErrorUserNotLoggedIn"
            },
            {
                "name": "/SMS",
                "parent": "/consents",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,BANK_ID,PostConsentPhoneJsonV310,ConsentJsonV310|ErrorUserNotLoggedIn"
            }]
            }]
        },
        {
            "name": "/product-collections",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/{COLLECTION_CODE}",
            "parent": "/product-collections",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,COLLECTION_CODE|BANK_ID,,ProductCollectionJsonTreeV310|ErrorUserNotLoggedIn##put,COLLECTION_CODE|BANK_ID,PutProductCollectionsV310,ProductCollectionsJsonV310|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/product-tree",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/{PRODUCT_CODE}",
            "parent": "/product-tree",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,PRODUCT_CODE|BANK_ID,,ProductTreeJsonV310|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/products",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,ProductsJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{PRODUCT_CODE}",
            "parent": "/products",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,PRODUCT_CODE|BANK_ID,,ProductJsonV310|ErrorUserNotLoggedIn##put,PRODUCT_CODE|BANK_ID,PostPutProductJsonV310,ProductJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
                "name": "/attribute",
                "parent": "/{PRODUCT_CODE}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,PRODUCT_CODE|BANK_ID,ProductAttributeJson,ProductAttributeResponseWithoutBankIdJson|ErrorInvalidJsonFormat"
            },
            {
                "name": "/attributes",
                "parent": "/{PRODUCT_CODE}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/{PRODUCT_ATTRIBUTE_ID}",
                "parent": "/attributes",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,PRODUCT_ATTRIBUTE_ID|PRODUCT_CODE|BANK_ID,,ProductAttributeResponseWithoutBankIdJson|ErrorUserHasMissingRoles##put,PRODUCT_ATTRIBUTE_ID|PRODUCT_CODE|BANK_ID,ProductAttributeJson,ProductAttributeResponseWithoutBankIdJson|ErrorUserHasMissingRoles##delete,PRODUCT_ATTRIBUTE_ID|PRODUCT_CODE|BANK_ID,,EmptyClassJson|ErrorUserHasMissingRoles"
                }]
            }]
            }]
        },
        {
            "name": "/public",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/accounts",
            "parent": "/public",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
                "name": "/{ACCOUNT_ID}",
                "parent": "/accounts",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                "name": "/{VIEW_ID}",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "false",
                "otherDetails": "",
                "children": [
                {
                    "name": "/account",
                    "parent": "/{VIEW_ID}",
                    "isEndPoint": "true",
                    "onVulnerablePath": "false",
                    "otherDetails": "get,VIEW_ID|ACCOUNT_ID|BANK_ID,,ModeratedCoreAccountJsonV300|ErrorBankNotFound"
                }]
                }]
            }]
            }]
        },
        {
            "name": "/search",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/customers",
            "parent": "/search",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/mobile-phone-number",
                "parent": "/customers",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,BANK_ID,PostCustomerPhoneNumberJsonV400,CustomerJsonV310|ErrorUserNotLoggedIn"
            }]
            }]
        },
        {
            "name": "/transaction-request-types",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,TransactionRequestTypesJSON|ErrorUserNotLoggedIn"
        },
        {
            "name": "/transaction-types",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,TransactionTypesJsonV200|ErrorBankNotFound##put,BANK_ID,TransactionTypeJsonV200,TransactionType|ErrorUserNotLoggedIn"
        },
        {
            "name": "/user_customer_links",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "post,BANK_ID,CreateUserCustomerLinkJson,UserCustomerLinkJson|ErrorUserNotLoggedIn"
        },
        {
            "name": "/users",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/{USER_ID}",
            "parent": "/users",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/entitlements",
                "parent": "/{USER_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,USER_ID|BANK_ID,,EntitlementJSONs|ErrorUserNotLoggedIn"
            }]
            },
            {
            "name": "/current",
            "parent": "/users",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/auth-context-updates",
                "parent": "/current",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/{SCA_METHOD}",
                "parent": "/auth-context-updates",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,SCA_METHOD|BANK_ID,PostUserAuthContextJson,UserAuthContextUpdateJson|ErrorUserNotLoggedIn"
                }]
            }]
            }]
        }]
        }]
    },
    {
        "name": "/cards",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,PhysicalCardsJSON|ErrorUserNotLoggedIn"
    },
    {
        "name": "/certs",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,SeverJWK|ErrorUnknownError"
    },
    {
        "name": "/config",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,ConfigurationJSON|ErrorUserNotLoggedIn"
    },
    {
        "name": "/connector",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/loopback",
        "parent": "/connector",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,ObpApiLoopbackJson|ErrorUnknownError"
        }]
    },
    {
        "name": "/consumers",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/{CONSUMER_ID}",
        "parent": "/consumers",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/scope",
            "parent": "/{CONSUMER_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/{SCOPE_ID}",
            "parent": "/scope",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "delete,SCOPE_ID|CONSUMER_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/scopes",
            "parent": "/{CONSUMER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,CONSUMER_ID,,ScopeJsons|ErrorUserNotLoggedIn##post,CONSUMER_ID,CreateScopeJson,ScopeJson|ErrorUserNotLoggedIn"
        }]
        }]
    },
    {
        "name": "/customers",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/{CUSTOMER_ID}",
        "parent": "/customers",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/kyc_checks",
            "parent": "/{CUSTOMER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,CUSTOMER_ID,,KycChecksJSON|ErrorUserNotLoggedIn"
        },
        {
            "name": "/kyc_documents",
            "parent": "/{CUSTOMER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,CUSTOMER_ID,,KycDocumentsJSON|ErrorUserNotLoggedIn"
        },
        {
            "name": "/kyc_media",
            "parent": "/{CUSTOMER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,CUSTOMER_ID,,KycMediasJSON|ErrorUserNotLoggedIn"
        },
        {
            "name": "/kyc_statuses",
            "parent": "/{CUSTOMER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,CUSTOMER_ID,,KycStatusesJSON|ErrorUserNotLoggedIn"
        }]
        }]
    },
    {
        "name": "/development",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/call_context",
        "parent": "/development",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,EmptyClassJson|ErrorUserNotLoggedIn"
        }]
    },
    {
        "name": "/entitlement-requests",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,EntitlementRequestsJSON|ErrorUserNotLoggedIn##post,,CreateEntitlementJSON,EntitlementRequestJSON|ErrorUserNotLoggedIn",
        "children": [
        {
        "name": "/{ENTITLEMENT_REQUEST_ID}",
        "parent": "/entitlement-requests",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "delete,ENTITLEMENT_REQUEST_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
        }]
    },
    {
        "name": "/entitlements",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,EntitlementJSONs|ErrorUserNotLoggedIn"
    },
    {
        "name": "/jwks-uris",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,OAuth2ServerJwksUrisJson|ErrorUnknownError"
    },
    {
        "name": "/management",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/aggregate-metrics",
        "parent": "/management",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,AggregateMetricJSON|ErrorUserNotLoggedIn"
        },
        {
        "name": "/banks",
        "parent": "/management",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/{BANK_ID}",
            "parent": "/banks",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/account-web-hooks",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,BANK_ID,,AccountWebhooksJson|ErrorUserNotLoggedIn"
            },
            {
            "name": "/accounts",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/{ACCOUNT_ID}",
                "parent": "/accounts",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "put,ACCOUNT_ID|BANK_ID,UpdateAccountRequestJsonV310,UpdateAccountResponseJsonV310|ErrorInvalidJsonFormat"
            }]
            },
            {
            "name": "/cards",
            "parent": "/{BANK_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,BANK_ID,,PhysicalCardsJsonV310|ErrorUserNotLoggedIn##post,BANK_ID,CreatePhysicalCardJsonV310,PhysicalCardJsonV310|ErrorUserNotLoggedIn",
            "children": [
            {
                "name": "/{CARD_ID}",
                "parent": "/cards",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,CARD_ID|BANK_ID,,PhysicalCardWithAttributesJsonV310|ErrorUserNotLoggedIn##put,CARD_ID|BANK_ID,UpdatePhysicalCardJsonV310,PhysicalCardJsonV310|ErrorUserNotLoggedIn##delete,CARD_ID|BANK_ID,,EmptyClassJson|ErrorUserNotLoggedIn",
                "children": [
                {
                "name": "/attribute",
                "parent": "/{CARD_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,CARD_ID|BANK_ID,CardAttributeJson,CardAttributeCommons|ErrorUserNotLoggedIn"
                },
                {
                "name": "/attributes",
                "parent": "/{CARD_ID}",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                    "name": "/{CARD_ATTRIBUTE_ID}",
                    "parent": "/attributes",
                    "isEndPoint": "true",
                    "onVulnerablePath": "true",
                    "otherDetails": "put,CARD_ATTRIBUTE_ID|CARD_ID|BANK_ID,CardAttributeJson,CardAttributeCommons|ErrorUserNotLoggedIn"
                }]
                }]
            }]
            }]
        }]
        },
        {
        "name": "/connector",
        "parent": "/management",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
            "name": "/metrics",
            "parent": "/connector",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,,,ConnectorMetricsJson|ErrorInvalidDateFormat"
        }]
        },
        {
        "name": "/consumers",
        "parent": "/management",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,ConsumersJsonV310|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/{CONSUMER_ID}",
            "parent": "/consumers",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,CONSUMER_ID,,ConsumerJSON|ErrorUserNotLoggedIn##put,CONSUMER_ID,PutEnabledJSON,PutEnabledJSON|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/consumer",
            "parent": "/{CONSUMER_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/call-limits",
                "parent": "/consumer",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,CONSUMER_ID,,CallLimitJson|ErrorUserNotLoggedIn##put,CONSUMER_ID,CallLimitPostJson,CallLimitPostJson|ErrorUserNotLoggedIn"
            },
            {
                "name": "/redirect_url",
                "parent": "/consumer",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "put,CONSUMER_ID,ConsumerRedirectUrlJSON,ConsumerJSON|ErrorUserNotLoggedIn"
            }]
            }]
        }]
        },
        {
        "name": "/dynamic_entities",
        "parent": "/management",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,ListResult|ErrorUserNotLoggedIn##post,,DynamicEntityFooBar,DynamicEntityFooBar|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/{DYNAMIC_ENTITY_ID}",
            "parent": "/dynamic_entities",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "put,DYNAMIC_ENTITY_ID,DynamicEntityFooBar,DynamicEntityFooBar|ErrorUserNotLoggedIn##delete,DYNAMIC_ENTITY_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/historical",
        "parent": "/management",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
            "name": "/transactions ",
            "parent": "/historical",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "post,,PostHistoricalTransactionJson,PostHistoricalTransactionResponseJson|ErrorInvalidBankIdFormat"
        }]
        },
        {
        "name": "/method_routings",
        "parent": "/management",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,ListResult|ErrorUserNotLoggedIn##post,,MethodRoutingCommons,MethodRoutingCommons|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/{METHOD_ROUTING_ID}",
            "parent": "/method_routings",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "put,METHOD_ROUTING_ID,MethodRoutingCommons,MethodRoutingCommons|ErrorUserNotLoggedIn##delete,METHOD_ROUTING_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/metrics",
        "parent": "/management",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,MetricsJson|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/top-apis",
            "parent": "/metrics",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,,,TopApisJson|ErrorUserNotLoggedIn"
        },
        {
            "name": "/top-consumers",
            "parent": "/metrics",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,,,TopConsumersJson|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/user",
        "parent": "/management",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/reset-password-url",
            "parent": "/user",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "post,,PostResetPasswordUrlJsonV400,ResetPasswordUrlJsonV400|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/users",
        "parent": "/management",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
            "name": "/current",
            "parent": "/users",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/consumers",
            "parent": "/current",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,,,ConsumersJsonV310|ErrorUserNotLoggedIn"
            }]
        }]
        },
        {
        "name": "/webui_props",
        "parent": "/management",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,ListResult|ErrorUserNotLoggedIn##post,,WebUiPropsCommons,WebUiPropsCommons|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/{WEB_UI_PROPS_ID}",
            "parent": "/webui_props",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "delete,WEB_UI_PROPS_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
        }]
        }]
    },
    {
        "name": "/message-docs",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
        "name": "/CONNECTOR",
        "parent": "/message-docs",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,MessageDocsJson|ErrorUnknownError",
        "children": [
        {
            "name": "/swagger2.0",
            "parent": "/CONNECTOR",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,,,MessageDocsJson|ErrorUnknownError"
        }]
        }]
    },
    {
        "name": "/my",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/accounts",
        "parent": "/my",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,CoreAccountsJsonV300|ErrorUserNotLoggedIn"
        },
        {
        "name": "/banks",
        "parent": "/my",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/{BANK_ID}",
            "parent": "/banks",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/accounts",
            "parent": "/{BANK_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/{ACCOUNT_ID}",
                "parent": "/accounts",
                "isEndPoint": "false",
                "onVulnerablePath": "true",
                "otherDetails": "",
                "children": [
                {
                "name": "/account",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,ACCOUNT_ID|BANK_ID,,ModeratedCoreAccountJsonV400|ErrorBankAccountNotFound"
                },
                {
                "name": "/transactions",
                "parent": "/{ACCOUNT_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "get,ACCOUNT_ID|BANK_ID,,CoreTransactionsJsonV300|ErrorFilterSortDirectionError"
                }]
            }]
            }]
        }]
        },
        {
        "name": "/entitlement-requests",
        "parent": "/my",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,EntitlementRequestsJSON|ErrorUserNotLoggedIn"
        },
        {
        "name": "/entitlements",
        "parent": "/my",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,EntitlementJSONs|ErrorUserNotLoggedIn"
        }]
    },
    {
        "name": "/rate-limiting",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,RateLimitingInfoV310|ErrorUnknownError"
    },
    {
        "name": "/resource-docs",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
        "name": "/{API_VERSION}",
        "parent": "/resource-docs",
        "isEndPoint": "false",
        "onVulnerablePath": "false",
        "otherDetails": "",
        "children": [
        {
            "name": "/obp",
            "parent": "/{API_VERSION}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,API_VERSION,,EmptyClassJson|ErrorUnknownError"
        },
        {
            "name": "/swagger",
            "parent": "/{API_VERSION}",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "get,API_VERSION,,EmptyClassJson|ErrorUnknownError"
        }]
        }]
    },
    {
        "name": "/roles",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,AvailableRolesJSON|ErrorUserNotLoggedIn"
    },
    {
        "name": "/root",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,APIInfoJson400|ErrorUnknownError"
    },
    {
        "name": "/sandbox",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/data-import",
        "parent": "/sandbox",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "post,,SandboxDataImport,SuccessMessage|ErrorUserNotLoggedIn"
        }]
    },
    {
        "name": "/search",
        "parent": "/v4.0.0",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
        "name": "/metrics",
        "parent": "/search",
        "isEndPoint": "true",
        "onVulnerablePath": "false",
        "otherDetails": "get,,,EmptyClassJson|ErrorUserNotLoggedIn"
        },
        {
        "name": "/warehouse",
        "parent": "/search",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/{INDEX}",
            "parent": "/warehouse",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "post,INDEX,ElasticSearchJsonV300,EmptyClassJson|ErrorUserNotLoggedIn"
        },
        {
            "name": "/statistics",
            "parent": "/warehouse",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/{INDEX}",
            "parent": "/statistics",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
                "name": "/{FIELD}",
                "parent": "/{INDEX}",
                "isEndPoint": "true",
                "onVulnerablePath": "true",
                "otherDetails": "post,FIELD|INDEX,ElasticSearchJsonV300,EmptyClassJson|ErrorUserNotLoggedIn"
            }]
            }]
        }]
        }]
    },
    {
        "name": "/system-views",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "post,,CreateViewJson,ViewJsonV300|ErrorUserNotLoggedIn",
        "children": [
        {
        "name": "/{VIEW_ID}",
        "parent": "/system-views",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,VIEW_ID,,ViewJSONV220|ErrorUserNotLoggedIn##put,VIEW_ID,UpdateViewJSON,ViewJsonV300|ErrorInvalidJsonFormat##delete,VIEW_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
        }]
    },
    {
        "name": "/users",
        "parent": "/v4.0.0",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,UsersJsonV200|ErrorUserNotLoggedIn##post,,CreateUserJson,UserJsonV200|ErrorUserNotLoggedIn",
        "children": [
        {
        "name": "/{USERNAME}",
        "parent": "/users",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/lock-status",
            "parent": "/{USERNAME}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,USERNAME,,BadLoginStatusJson|ErrorUserNotLoggedIn##put,USERNAME,,BadLoginStatusJson|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/{USER_ID}",
        "parent": "/users",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/auth-context",
            "parent": "/{USER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,USER_ID,,UserAuthContextsJson|ErrorUserNotLoggedIn##post,USER_ID,PostUserAuthContextJson,UserAuthContextJson|ErrorUserNotLoggedIn##delete,USER_ID,,EmptyClassJson|ErrorUserNotLoggedIn",
            "children": [
            {
            "name": "/{USER_AUTH_CONTEXT_ID}",
            "parent": "/auth-context",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "delete,USER_AUTH_CONTEXT_ID|USER_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/entitlement-requests",
            "parent": "/{USER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,USER_ID,,EntitlementRequestsJSON|ErrorUserNotLoggedIn"
        },
        {
            "name": "/entitlement",
            "parent": "/{USER_ID}",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/{ENTITLEMENT_ID}",
            "parent": "/entitlement",
            "isEndPoint": "true",
            "onVulnerablePath": "false",
            "otherDetails": "delete,ENTITLEMENT_ID|USER_ID,,EmptyClassJson|ErrorUserNotLoggedIn"
            }]
        },
        {
            "name": "/entitlements",
            "parent": "/{USER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,USER_ID,,EntitlementJSONs|ErrorUserNotLoggedIn##post,USER_ID,CreateEntitlementJSON,EntitlementJSON|ErrorUserNotLoggedIn"
        },
        {
            "name": "/refresh",
            "parent": "/{USER_ID}",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "post,USER_ID,,RefreshUserJson|ErrorUserHasMissingRoles"
        }]
        },
        {
        "name": "/current",
        "parent": "/users",
        "isEndPoint": "true",
        "onVulnerablePath": "true",
        "otherDetails": "get,,,UserJsonV200|ErrorUserNotLoggedIn",
        "children": [
        {
            "name": "/auth-context-updates",
            "parent": "/current",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
            "name": "/{AUTH_CONTEXT_UPDATE_ID}",
            "parent": "/auth-context-updates",
            "isEndPoint": "false",
            "onVulnerablePath": "false",
            "otherDetails": "",
            "children": [
            {
                "name": "/challenge",
                "parent": "/{AUTH_CONTEXT_UPDATE_ID}",
                "isEndPoint": "true",
                "onVulnerablePath": "false",
                "otherDetails": "post,AUTH_CONTEXT_UPDATE_ID,PostUserAuthContextUpdateJsonV310,UserAuthContextUpdateJson|ErrorUserNotLoggedIn"
            }]
            }]
        },
        {
            "name": "/customers",
            "parent": "/current",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,,,CustomerJSONs|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/email",
        "parent": "/users",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/EMAIL",
            "parent": "/email",
            "isEndPoint": "false",
            "onVulnerablePath": "true",
            "otherDetails": "",
            "children": [
            {
            "name": "/terminator",
            "parent": "/EMAIL",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,,,UsersJsonV200|ErrorUserNotLoggedIn"
            }]
        }]
        },
        {
        "name": "/user_id",
        "parent": "/users",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/{USER_ID}",
            "parent": "/user_id",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,USER_ID,,UsersJsonV200|ErrorUserNotLoggedIn"
        }]
        },
        {
        "name": "/username",
        "parent": "/users",
        "isEndPoint": "false",
        "onVulnerablePath": "true",
        "otherDetails": "",
        "children": [
        {
            "name": "/{USERNAME}",
            "parent": "/username",
            "isEndPoint": "true",
            "onVulnerablePath": "true",
            "otherDetails": "get,USERNAME,,UsersJsonV200|ErrorUserNotLoggedIn"
        }]
        }]
    }]
    }]
}
