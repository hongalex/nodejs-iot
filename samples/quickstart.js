// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

async function quickstart() {
  const iot = require('@google-cloud/iot');
  const client = new iot.v1.DeviceManagerClient();
  const projectId = process.env.GCLOUD_PROJECT || 'YOUR_PROJECT_ID';
  const parent = client.locationPath(projectId, 'us-central1');
  const [resources] = await client.listDeviceRegistries({parent});
  console.log(`${resources.length} resource(s) found.`);
  for (const resource of resources) {
    console.log(resource);
  }
}
quickstart().catch(console.error);
