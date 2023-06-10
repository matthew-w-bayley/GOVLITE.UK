var app = new Vue({
    el: '#app',
    data: {
        title: "MR",
        surname: "surname",
        forenames: "forenames",
        previous_names: [{"forenames": "jesus christ", "surname": "surnamehere"}],
        date_of_birth: "date of birth",
        nationality: "British",
        over_18: "Yes",
        applicant_address: "applicant address",
        applicant_postcode: "applicant postcode",
        applicant_posttown: "applicant posttown",
        applicant_email: "applicant email",
        applicant_phone_daytime: "applicant phone",
        applicant_phone_evening: "applicant phone",
        applicant_phone_mobile: "applicant phone",
        applicant_fax: "applicant fax",
        correspondence_address: "correspondence address",
        correspondence_postcode: "correspondence postcode",
        correspondence_posttown: "correspondence posttown",
        correspondence_email: "correspondence email",
        correspondence_phone_daytime: "correspondence phone",
        correspondence_phone_evening: "correspondence phone",
        correspondence_phone_mobile: "correspondence phone",
        correspondence_fax: "correspondence fax",
    },
    methods: {
        getCurrentDateAndTime() {
            const dateTime = new Date();
            return dateTime.toLocaleString();
        },
    }
})

/*
https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
  */