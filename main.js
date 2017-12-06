var upload = require('./uploader.js');

var main = (bucketName, clientId, clientSecret, fileName, filePath)=>{
    console.log(upload.distUpload());
}

main('bucketKey',
 'clientId',
  'clientSecret',
  'UrbanHouse-2015.rvt',
  './models/UrbanHouse-2015.rvt'

 )
