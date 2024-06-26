const request = require('supertest');
//const chai = require('chai');
import { expect } from 'chai';
import app from '../server.js';

describe('User API', () => {
    let userId;

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/worko/user')
            .send({
                email: 'test@example.com',
                name: 'Test User',
                age: 25,
                city: 'Test City',
                zipCode: '12345'
            });
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('email', 'test@example.com');
        userId = res.body._id; // Save the user ID for future tests
    });

    it('should list all users', async () => {
        const res = await request(app)
            .get('/worko/user')
            .set('Authorization', `Bearer your_jwt_token`); // Replace with actual token if needed
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
    });

    it('should get user details by ID', async () => {
        const res = await request(app)
            .get(`/worko/user/${userId}`)
            .set('Authorization', `Bearer your_jwt_token`); // Replace with actual token if needed
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('_id', userId);
    });

    it('should update a user', async () => {
        const res = await request(app)
            .put(`/worko/user/${userId}`)
            .send({
                email: 'updated@example.com',
                name: 'Updated User',
                age: 26,
                city: 'Updated City',
                zipCode: '54321'
            })
            .set('Authorization', `Bearer your_jwt_token`); // Replace with actual token if needed
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('email', 'updated@example.com');
    });

    it('should partially update a user', async () => {
        const res = await request(app)
            .patch(`/worko/user/${userId}`)
            .send({
                city: 'Partially Updated City'
            })
            .set('Authorization', `Bearer your_jwt_token`); // Replace with actual token if needed
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('city', 'Partially Updated City');
    });

    it('should soft delete a user', async () => {
        const res = await request(app)
            .delete(`/worko/user/${userId}`)
            .set('Authorization', `Bearer your_jwt_token`); // Replace with actual token if needed
        expect(res.status).to.equal(204);
    });

    it('should not find a deleted user', async () => {
        const res = await request(app)
            .get(`/worko/user/${userId}`)
            .set('Authorization', `Bearer your_jwt_token`); // Replace with actual token if needed
        expect(res.status).to.equal(404);
    });
});
