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
import { Office } from './office';
import { GroupLevel } from './groupLevel';
import { Staff } from './staff';
import { Client } from './client';


export interface Group { 
    accountNumberRequiresAutoGeneration?: boolean;
    activationDate?: string;
    active?: boolean;
    activeClientMembers?: Set<Client>;
    center?: boolean;
    childGroup?: boolean;
    clientMembers?: Set<Client>;
    closed?: boolean;
    group?: boolean;
    groupLevel?: GroupLevel;
    groupMembers?: Array<Group>;
    id?: number;
    _new?: boolean;
    notActive?: boolean;
    notPending?: boolean;
    office?: Office;
    parent?: Group;
    pending?: boolean;
    staff?: Staff;
    submittedOnDate?: string;
    transferInProgress?: boolean;
    transferInProgressOrOnHold?: boolean;
    transferOnHold?: boolean;
}

