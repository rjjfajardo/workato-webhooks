require('dotenv').config()
const express = require('express')
const axios = require('axios').default

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/workato', (req, res) => {
  axios
    .post(process.env.WORKATO_WEBHOOK, {
      data: {
        capApprovedDate: '7/21/2021',
        delayReason: 'Customer requested cancellation',
        escalatedCustomerProfile: false,
        externalID: 'string',
        finalInspectionScheduledDate: '9/22/2021',
        hoa: 'No',
        hoaApplicationSubmittedDate: '10/2/2019',
        hoaApprovedDate: '10/16/2019',
        hoaName: 'n/a',
        inspectionRequestedDate: '1970-01-01',
        installFirstScheduledDate: '8/24/2021',
        interconnectionExpiryDate: '1970-01-01',
        isCritterGuardRequested: false,
        isPEStampRequired: false,
        isServicePanelUpgradeNeeded: 'No',
        mostRecentDateInstallWasScheduledDate: '8/24/2021',
        nemSubmittedDate: '2015-07-23T00:00:00.000Z',
        permitApprovalDate: '2015-07-23T00:00:00.000Z',
        permitCancellationDate: '12/10/2020',
        permitExpectedDate: '8/20/2021',
        permitFollowUpDate: '1/21/2022',
        permitNumber: '21080247248',
        permitSubmittedDate: '1/2/1900',
        peStampOrderedDate: '7/22/2021',
        peStampReceivedDate: '6/2/2022',
        plansCompletedDate: '7/22/2021',
        roofWorkSquareFootage: null,
        rtgDate: '8/30/2021',
        scheduledInstallDate: '9/2/2021',
        siteAuditCompleteDate: '6/25/2021',
        siteAuditResultsReceivedDate: '1970-01-01',
        siteAuditScheduledDate: '6/24/2021',
        siteAuditScheduledDateTime: '2021-06-25T19:30:00.000Z',
        siteNotes: 'string',
        splitInstallReason: 'N/A',
        utilityApprovalDate: '12/6/2019',
      },
    })
    .then(() => {
      console.log('Success!')
      res.status(204).send()
    })
    .catch((err) => console.error(`Error sending: ${err}`))
})

app.use((error, req, res, next) => {
  res.status(500)
  res.send({ error: error })
  console.error(error.stack)
  next(error)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
