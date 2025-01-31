/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Extension, AzureStackHCIClient } from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create Extension for HCI cluster.
 *
 * @summary Create Extension for HCI cluster.
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/stable/2022-01-01/examples/PutExtension.json
 */
async function createArcExtension() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "test-rg";
  const clusterName = "myCluster";
  const arcSettingName = "default";
  const extensionName = "MicrosoftMonitoringAgent";
  const extension: Extension = {
    typePropertiesExtensionParametersType: "MicrosoftMonitoringAgent",
    protectedSettings: { workspaceKey: "xx" },
    publisher: "Microsoft.Compute",
    settings: { workspaceId: "xx" },
    typeHandlerVersion: "1.10"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.extensions.beginCreateAndWait(
    resourceGroupName,
    clusterName,
    arcSettingName,
    extensionName,
    extension
  );
  console.log(result);
}

createArcExtension().catch(console.error);
