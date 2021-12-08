const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://192.168.56.101:81/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    //'sonar.projectKey':'NodeJsMithunTechnologies',
	    //'sonar.login': 'a782a2638134d9267aa7d0d0c4e2266cc7583938',
	    'sonar.login': 'admin',
	    'sonar.password': 'raja01',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
