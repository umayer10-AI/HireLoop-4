require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
// const dotenv = require('dotenv')
const port = 5000 || process.env.PORT
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.NEXT_URL

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db('authHire')
        const userCollection = db.collection('allData')
        const companyCollection = db.collection('companies')
        const jobsCollection = db.collection('jobs')
        const applicationsCollection = db.collection('applications')
        const subscriptionCollection = db.collection('subscription')

        app.get('/user', async (req,res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        app.get('/user/jobs', async (req,res) => {
            const query = {}
            if(req.query.companyId){
                query.companyId = req.query.companyId
            }
            if(req.query.status){
                query.status = req.query.status
            }
            // console.log(query.companyId,query.status)
            const result = await userCollection.find(query).toArray()
            res.send(result)
        })

        app.get('/api/applications', async (req,res) => {
            const query = {}
            if(req.query.jobId){
                query.jobId = req.query.jobId
            }
            if(req.query.applicantId){
                query.applicantId = req.query.applicantId
            }
            // if(req.query.applicantId){
            //     query.jobId = req.query.applicantId
            // }
            // console.log(query.jobId,query.applicantId)
            console.log(query.jobId,query.applicantId)
            const result = await applicationsCollection.find(query).toArray()
            res.send(result)
            // console.log(result)
        })

        app.post('/user', async (req,res) => {
            const newUser = req.body
            const newJob = {
                ...newUser,
                createAt: new Date()
            }
            const result = await userCollection.insertOne(newJob)
            res.send(result)
        })

        // companies

        app.post('/api/companies', async(req,res) => {
            const newUser = req.body
            const newCompany = {
                ...newUser,
                createAt: new Date()
            }
            const result = await companyCollection.insertOne(newCompany)
            res.send(result)
        })

        //aplications

        app.post('/api/applications', async(req,res) => {
            const n = req.body
            const newApplication = {
                ...n,
                createdAt: new Date()
            }
            const result = await applicationsCollection.insertOne(newApplication)
            res.send(result)
        })

        app.post('/api/subscriptions', async (req,res) => {
            const newUser = req.body
            const subsInfo = {
                ...newUser,
                createdAt: new Date()
            }
            const result = await userCollection.insertOne(subsInfo)
            res.send(result)
        })

        app.get('/user/jobs/browser', async (req,res) => {
            const result = await jobsCollection.find().toArray()
            res.send(result)
        })

        app.get('/user/jobs/browser/:id', async (req,res) => {
            const {id} = req.params
            const query = {
                _id: new ObjectId(id)
            }
            const result = await jobsCollection.findOne(query)
            res.send(result)
        })

        app.get('/api/my/companies', async(req,res) => {
            const query = {}
            if(req.query.reqruiterId){
                query.reqruiterId = req.query.reqruiterId
            }
            const result = await companyCollection.findOne(query)
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Umayer Ahmad Server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})