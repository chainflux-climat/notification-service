import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import * as handlebars from 'handlebars';
import * as fs from 'fs';

export class NodeMailer {
  transporter: any
  from = "sangram@chainflux.com"
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true, // Compliant
      port: 465,
      auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.NOTIFICATION_PASS
      }
    });
  }

  async sendMail(data: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await this.transporter.sendMail({
          from: this.from,
          to: JSON.parse(data.to),
          subject: data.subject,
          text: data.messageBody,
        });
        resolve(res)
      } catch (error: any) {
        console.log('error', error)
        throw new Error(error);
      }
    })
  }
  async sendMailWithTemplate(data: any) {
    let extra_data = data.extra_data
    let parseHtml = await this.parseOTPHtml(extra_data);
    return new Promise(async (resolve, reject) => {
      try {
        let res = await this.transporter.sendMail({
          from: this.from,
          to: data.to,
          subject: data.subject,
          html: parseHtml
        });
        resolve(res)
      } catch (error: any) {
        console.log('error', error)
        throw new Error(error);
      }
    })
  }
  readHTMLFile(path: any, callback: any) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err: any, html: any) {
      if (err) {
        throw err;
        callback(err);
      }
      else {
        callback(null, html);
      }
    });
  }
  parseOTPHtml(data: any) {
    return new Promise(async (resolve, reject) => {
      console.log(data, "data")
      if (data.otp) {
        this.readHTMLFile('dist/src/interfaces/utils/otpTemplate.html', function (err: any, html: any) {
          var template = handlebars.compile(html);
          var replacements = {
            otp: data.otp,
            support: process.env.SHINE_SUPPORT
          };
          var htmlToSend = template(replacements);
          // console.log("htmlToSend",htmlToSend)
          resolve(htmlToSend)
        })
      } else if (data.link && data.uin) {
        this.readHTMLFile('dist/src/interfaces/utils/refinerTemplate.html', function (err: any, html: any) {
          var template = handlebars.compile(html);
          var replacements = {
            action: data.action,
            refiner: data.refiner,
            uin: data.uin,
            time: data.time,
            link: data.link,
            support: process.env.SHINE_SUPPORT
          };
          var htmlToSend = template(replacements);
          // console.log("htmlToSend",htmlToSend)
          resolve(htmlToSend)

        });
      } else if (data.urn) {
        this.readHTMLFile('dist/src/interfaces/utils/labTemplate.html', function (err: any, html: any) {
          var template = handlebars.compile(html);
          var replacements = {
            action: data.action,
            refiner: data.refiner,
            urn: data.urn,
            time: data.time,
            link: data.link,
            support: process.env.SHINE_SUPPORT
          };
          var htmlToSend = template(replacements);
          // console.log("htmlToSend",htmlToSend)
          resolve(htmlToSend)

        });
      } else if (data.uin && data.sourcing_link) {
        this.readHTMLFile('dist/src/interfaces/utils/reportTemplate.html', function (err: any, html: any) {
          var template = handlebars.compile(html);
          var replacements = {
            uin: data.uin,
            sourcing_link: data.sourcing_link,
            goldbar_link: data.goldbar_link,
            source_type: data.source_type,
            support: process.env.SHINE_SUPPORT
          };
          var htmlToSend = template(replacements);
          // console.log("htmlToSend",htmlToSend)
          resolve(htmlToSend)

        });
      } else if (data.from) {
        this.readHTMLFile('dist/src/interfaces/utils/reportByDateTemplate.html', function (err: any, html: any) {
          var template = handlebars.compile(html);
          var replacements = {
            from: data.from,
            to: data.to,
            sourcing_link: data.sourcing_link,
            goldbar_link: data.goldbar_link,
            support: process.env.SHINE_SUPPORT
          };
          var htmlToSend = template(replacements);
          // console.log("htmlToSend",htmlToSend)
          resolve(htmlToSend)

        });
      }
    })
  }
}
