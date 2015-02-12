'use strict';

describe('helpers', function () {

    var helpers;

    beforeEach(function () {

            helpers = helpers;
        });
    });

    describe('fetchEntities', function () {

        var successPayload = {
                data: {
                    items: ['data1', 'data2']
                }
            },
            errorPayload = {
                data: {
                    status: 500,
                    message: 'error'
                }
            };

        function mockFetchEntitiesRequest(fail) {
            var deferred = $q.defer();

            if (!fail) {
                deferred.resolve(successPayload);
            } else {
                deferred.reject(errorPayload);
            }

            spyOn($http, 'get').and.callFake(function () {
                return deferred.promise;
            });
        }

        it('calls correct URL', function () {
            mockFetchEntitiesRequest();

            service.fetchEntities(projectName);
            expect($http.get).toHaveBeenCalledWith(expectedUrl + projectName);
        });

        it('returns relevant data', function () {
            mockFetchEntitiesRequest();

            service.fetchEntities(projectName).then(function (data) {
                expect(data).toBeDefined();
                expect(data).toEqual(successPayload.data.items);
            });
            $rootScope.$digest();
        });

        it('forwards error', function () {
            mockFetchEntitiesRequest(true);

            service.fetchEntities(projectName).then(null, function (err) {
                expect(err).toBeDefined();
                expect(err).toEqual(errorPayload);
            });
            $rootScope.$digest();
        });

        it('logs error with ErrorResponseHandler', function () {
            mockFetchEntitiesRequest(true);

            service.fetchEntities(projectName);
            $rootScope.$digest();

            expect(errorResponseHandler.log).toHaveBeenCalledWith(errorPayload);
        });
    });

    describe('createChildEntity', function () {

    });

    describe('updateLearningEntity', function () {

    });

    describe('loadQtiXml', function () {

    });

});
