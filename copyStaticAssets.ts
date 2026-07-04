import * as shell from "shelljs";

shell.cp("-R", "env", "dist/src/");
shell.cp("-R", "src/certs", "dist/src/");
shell.cp("-R", "src/interfaces/utils/template/otpTemplate.html", "dist/src/interfaces/utils");
shell.cp("-R", "src/interfaces/utils/template/reportTemplate.html", "dist/src/interfaces/utils");
shell.cp("-R", "src/interfaces/utils/template/reportByDateTemplate.html", "dist/src/interfaces/utils");
shell.cp("-R", "src/interfaces/utils/template/refinerTemplate.html", "dist/src/interfaces/utils");
shell.cp("-R", "src/interfaces/utils/template/labTemplate.html", "dist/src/interfaces/utils");
// shell.cp("-R", "src/config/ssl/server.*", "dist/src/config/ssl/");