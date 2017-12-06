var upload = require('./uploader.js');

var main = (bucketName, clientId, clientSecret, fileName, filePath)=>{
    console.log(upload.distUpload());
}

main('grit_hackathonbua1koq2jxcz66qkowgczeaokwpoydb2',
 'bUA1koQ2jXcz66qKOWGCzEAOKWPOyDb2',
  'M510e35bf95184af',
  'UrbanHouse-2015.rvt',
  './models/UrbanHouse-2015.rvt'

 )