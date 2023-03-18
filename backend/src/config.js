import * as dotenv from 'dotenv';
dotenv.config()

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
export const mongoConnectionString = `mongodb+srv://${username}:${password}@buzzlinemongo.xonfous.mongodb.net/?retryWrites=true&w=majority`;

export const serviceAccount = 
{
    "type": "service_account",
    "project_id": "buzzline-93257",
    "private_key_id": "f6136ab8f64eed20c6517b95d7776dd0b6783f12",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCT4FG0TWENi+iN\nzcbO0/rGRE4DhAU4OoNvLBFH6t5fV8iQy2lRDQBU8P2EH7MUWoM6EB71l8RGqxW+\nwjfsPX1kAOw6iKxjRq6UWA0AmE9/TqKfM8n7wzs5GEREzSxFyjbaV5F8naxA3m3H\nD4gvVP4FWCIlWqOQyhPiXQblY3mUflMzshpn3wYlCkkYKCLk6ARwlCE2fvvm0wkW\nVWf0onY2nIo1wV/6QsO42w7StsfpjEAoqAzmrrAYnOfB3Dip3YgemshJGK9022DJ\nmfKQHVHkT97KdbX4381ZA8J71bKIBuppyX3xA+fGG5jpb8Rkse2OemZ3m3SPb4PS\nrz/pnPf3AgMBAAECggEAOvucC1Nb9VfLZBhihqf13HRtO6jCnjl0qHjG0c1Ecnok\ntWB1Ow95BOh07mjoeKNbuWKpvqMQ9nESRNraDIBATg2yK+zM+fI8+02drhGSkABx\nDBhPpfyq2CyuOlUuJg4wz+lizfZkOSGfXul6lAqOIdqUEBs1p7B6uu0JLaD+YzRe\nfA9NH4syG6QIzpOG6Cw++1D6Q7GHk3gR4SMB1dwM2aGHbn21X0tSJmlExBKYGKcG\n5UvvHeXSxWCKhOHo7ypwAgOs7zAvKVs7LayfoM3kyFBuAC6k3wLjKsgSMvP1RtBT\n0IPAUuNVshzBxnb7peHyID+MAh0PunFASF4x4ryvCQKBgQDPQ/DQrPqODAdouhkQ\nUmL+TDQTlMD0JElN57MaD2HPRC3mVzmt/29crTg4NEceMKYCzoMe7dQdSUC2LYOQ\nIh/hc/NB3uylUERbpJ4uBtOG2ph0xyzg+Bzz9rfAWiwrh9+Rft1RY7hlV8bFz4GX\nbvJdkwp+xPyBJyqcH2wc08VG+QKBgQC2pYeBkpSUUEhoraeuP55QQbTSmzeWD3ym\nHqrQm2rnKhLY98zU91FjWySrn43R0DdCM5XHIP3wqVb5kp5Wxo0M6I9+MxV8vjFj\n9qYS78x34G5WvRhQ20FiwcOPNSn1XN6/tD8NBDAqfP9G5PEJ/pm3ZeXNpCpYJna3\nVc+AP79CbwKBgQCmNxkPcDk64yCp9twUv81NnDUDIv8ei18SD+cM1hsdSdL5byf9\nhuR60RtNz3bdGix4Ab8bdaTum4k+z/86/nLMrdz+DVWAOX+ocrq7tJO8CN/MftJZ\n0//8EfZIVsgnXL6JAtFf7PW6qArrJb8Kf1n0evAmu7i3pn5AV96uu5HwmQKBgQCx\n6sz1CzRwxUPDtGWC97XfuCHMhia/ppZlu7npO3wHcpSphbmiOsitYDt4cxRTLeCm\nPFnKf/jeVhbDRm+3V/JOgLxG0rw7p4m1Nq7QA4fJvnW9SLZHDU3ERbuZ5M/ak3zo\ngUxqAYpp2RlSlfG3KqvSWxBgIWqeM9mw/YYECBTnQQKBgHyN6ayo36iuZWsN7Yxa\nMaXgKPY32vBhxzU6LKj1lb/4rrG0xRyOn2UEEHkLJWfqVkImhSaXhFqei+obVktt\n8qRsC+pncOnfq2/hNuXRcAtB7+Sb/BTQVW61hOcht60PxNgxQKxfxtDbX0RGpgn4\ngRp2ytVG4c82HPU8Fjx8mSzN\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-nh3xd@buzzline-93257.iam.gserviceaccount.com",
    "client_id": "112439404608042445355",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nh3xd%40buzzline-93257.iam.gserviceaccount.com"
};
