var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      var oldpath = files.filetoupload.path;
      var newpath = '/home/ubuntu/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
              res.write('Congrats, your file is submitted successfully!\n');
          res.write('\n')
      });
    });

        const { exec } = require('child_process');
        exec('/home/ubuntu/pa2-execute.py', (err, stdout, stderr) => {
                if (err) {
                        console.log(`stderr: ${stderr}`);
                        return;
                         }
        var op = `${stdout}`;
        console.log(`stdout: ${stdout}`);
        res.write(op);
        res.end();
      });

  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('Welcome, please upload your solution below and check for results on the next page. <br>');

    res.write('<br>');
    res.write('<br>');

    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<br>');

          res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
