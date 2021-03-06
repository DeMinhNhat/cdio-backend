const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


var indexRouter = require('./routes/index');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

//cdio2 route
app.use('/', indexRouter);

//Outcome Standard Route
const routesPrograms = require('./routes/OutcomeStandard/programRoute');
const routesFaculties = require('./routes/OutcomeStandard/facultyRoute');
const routesOutcomes = require('./routes/OutcomeStandard/outcomeStandardRoute');
const routesDetailOutcomes = require('./routes/OutcomeStandard/detailOutcomeStandardRoute');
const routesRevisions = require('./routes/OutcomeStandard/revisionRoute');
const routesDetailRevisions = require('./routes/OutcomeStandard/detailRevisionRoute');
const routesOutcomeEduProg = require('./routes/OutcomeStandard/outcomeeduprogRoute');

//Education Program Route
const routesSubject = require('./routes/EducationProgram/subjectRoute');
const routeEduProg = require('./routes/EducationProgram/eduprogramRoute');
const routeLevel = require('./routes/EducationProgram/levelRoute');
const routeMajor = require('./routes/EducationProgram/majorRoute');
const routeDetailEduProg = require('./routes/EducationProgram/detaileduprogRoute');
const routeEduPurpose = require('./routes/EducationProgram/edupurposeRoute');
const routeSubjectEduProg = require('./routes/EducationProgram/subjecteduprogRoute');
const routeSubjectBlock = require('./routes/EducationProgram/subjectblockRoute');
const routeDetailBlock = require('./routes/EducationProgram/detailblockRoute');
const routeEduProgContent = require('./routes/EducationProgram/eduprogcontentRoute');
const routeTeachPlanBlock = require('./routes/EducationProgram/teachplanblockRoute');

const routeUser = require('./routes/User/userRoute');

routesPrograms(app);
routesFaculties(app);
routesOutcomes(app);
routesDetailOutcomes(app);
routesRevisions(app);
routesDetailRevisions(app);
routesOutcomeEduProg(app);

routesSubject(app);
routeEduProg(app);
routeLevel(app);
routeMajor(app);
routeDetailEduProg(app);
routeEduPurpose(app);
routeSubjectEduProg(app);
routeSubjectBlock(app);
routeDetailBlock(app);
routeEduProgContent(app);
routeTeachPlanBlock(app);

routeUser(app);
app.listen(3001, () => {
    console.log('Node server running @ http://localhost:3001')
});