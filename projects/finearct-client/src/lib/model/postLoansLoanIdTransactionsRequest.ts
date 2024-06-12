/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * PostLoansLoanIdTransactionsRequest
 */
export interface PostLoansLoanIdTransactionsRequest { 
    accountNumber?: string;
    bankNumber?: string;
    chargeOffReasonId?: number;
    checkNumber?: string;
    dateFormat?: string;
    dueDate?: string;
    externalId?: string;
    frequencyNumber?: number;
    frequencyType?: string;
    loanChargeId?: number;
    locale?: string;
    note?: string;
    numberOfInstallments?: number;
    paymentTypeId?: number;
    receiptNumber?: string;
    reversalExternalId?: string;
    routingCode?: string;
    startDate?: string;
    transactionAmount?: number;
    transactionDate?: string;
    writeoffReasonId?: number;
}
