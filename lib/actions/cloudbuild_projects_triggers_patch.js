/**
 * Auto-generated action file for "Cloud Build" API.
 *
 * Generated at: 2019-05-23T09:13:04.467Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-cloudbuild-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'cloudbuild.projects.triggers.patch'
 * Endpoint Path: '/v1/projects/{projectId}/triggers/{triggerId}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "projectId",
    "triggerId",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "projectId": "projectId",
    "triggerId": "triggerId",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "images": "images",
    "location": "location",
    "paths": "paths",
    "endTime": "endTime",
    "startTime": "startTime",
    "timing": "timing",
    "objects": "objects",
    "artifacts": "artifacts",
    "buildTriggerId": "buildTriggerId",
    "createTime": "createTime",
    "finishTime": "finishTime",
    "id": "id",
    "logUrl": "logUrl",
    "logsBucket": "logsBucket",
    "diskSizeGb": "diskSizeGb",
    "env": "env",
    "logStreamingOption": "logStreamingOption",
    "logging": "logging",
    "machineType": "machineType",
    "requestedVerifyOption": "requestedVerifyOption",
    "secretEnv": "secretEnv",
    "sourceProvenanceHash": "sourceProvenanceHash",
    "substitutionOption": "substitutionOption",
    "volumes": "volumes",
    "workerPool": "workerPool",
    "options": "options",
    "artifactManifest": "artifactManifest",
    "artifactTiming": "artifactTiming",
    "buildStepImages": "buildStepImages",
    "buildStepOutputs": "buildStepOutputs",
    "numArtifacts": "numArtifacts",
    "results": "results",
    "secrets": "secrets",
    "branchName": "branchName",
    "commitSha": "commitSha",
    "dir": "dir",
    "repoName": "repoName",
    "tagName": "tagName",
    "repoSource": "repoSource",
    "bucket": "bucket",
    "generation": "generation",
    "object": "object",
    "storageSource": "storageSource",
    "source": "source",
    "fileHashes": "fileHashes",
    "resolvedRepoSource": "resolvedRepoSource",
    "resolvedStorageSource": "resolvedStorageSource",
    "sourceProvenance": "sourceProvenance",
    "status": "status",
    "statusDetail": "statusDetail",
    "steps": "steps",
    "substitutions": "substitutions",
    "tags": "tags",
    "timeout": "timeout",
    "build": "build",
    "description": "description",
    "disabled": "disabled",
    "filename": "filename",
    "checkSuite": "checkSuite",
    "installationId": "installationId",
    "name": "name",
    "owner": "owner",
    "branch": "branch",
    "commentControl": "commentControl",
    "pullRequest": "pullRequest",
    "tag": "tag",
    "push": "push",
    "github": "github",
    "ignoredFiles": "ignoredFiles",
    "includedFiles": "includedFiles",
    "triggerTemplate": "triggerTemplate",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'cloudbuild.projects.triggers.patch',
        pathName: '/v1/projects/{projectId}/triggers/{triggerId}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}