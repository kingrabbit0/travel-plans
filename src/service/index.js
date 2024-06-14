import axios from "axios";
import {config} from "../config";

const requestPost  = (url, data, successCallback, errorCallback) => {
    axios
        .post(config.serverUrl + url, data)
        .then((result) => {
            successCallback(result);
        })
        .catch((error) => {
            errorCallback(error);
        });
}

const requestGet  = (url, data, successCallback, errorCallback) => {
    axios
        .get(config.serverUrl + url, data)
        .then((result) => {
            successCallback(result);
        })
        .catch((error) => {
            errorCallback(error);
        });
}

export {requestPost, requestGet};