// static ids stored in one place
var PARAMS = {
  formId: '1tqlfgjPKmdN1SncdRtNT5-LUaf8KKDigVrhuhlg8bhg',
  slidesTemplateId: '1tulPOKg0NFxJYAGEyODdRNy8dJFDIbXtW4wZYloyVM8',
  imageFolderId: '1J2lcxyE4oJ4hSdABr-i5th6IqVcNRrAC',
  destinationFolderId: '1iGi5ho6rrwktDz0OJmuA6szDiLpPJpjM',
  images: {
    cat: 'https://lh3.googleusercontent.com/2JQvLXGWX1mvllgJraZAoxrYqZnpe57TOZe7Pz4cbDxhRRVpgyhSEoQz-SHn4pIO1kjFA-NmJ3fDr12bbZpGCcFKpIPcamadf_zhSqP9zXKOnGur0RLVZPNS9jZShgLWpkMZEZz2MMxTrYlDxKmap-MM5VSTAl8uAFKi1x2YIHsqMdOdJ-36d4RGHYaDBc0myUSVrzzE4T4515ATqHOht3CIYYvR_Qq7N3yFoCnn--DPNPOrYNkx5NvWd3k6FTtD0RXUCgl4N5E0b7DAHVQ_-E-WKg4aO-eOiUFHd3F2F-cZ2x1xbzCBZs9W3DbFA570rqBBGcEtgabg0AGTuvHhig5yP166j0FRF99SZ1e7F8fsZnEcJiiEDel7hIAK_MjDeAZviQbHjCwUbpS9eeBbVGSTCP4Y5O78Z7cKMpqgP0uef7GcbD3CwoZN1YokbrRiw5UtrolU6ceF5m-6bCzYnJbfVI2pCClWF-FC2aecSgqxH1piJ8ks8hsQcl94MtLN68G0SX1Tg9sSB1505HM5hUzTlkL_R1wGzF-LEfuxgxzBItXiMHtdInG5OsqjIVj8VoWBDgAKSBBFFCA-i3roj6Td0MwNRP_X4TThKc_kWMDlMTHY-aauMeRytt9KychXkqST9b2Hlhwn0KJq_fsEOXNOPzK84Usj3XbO2oZu_0sn8aKRCyNFy896D_s2iJZD7MtqfQVRFNKk7UBwRrtcF13-hdtulUeNAUPL4UBcdy6n_9mZ=w1465-h978-no',
    dog: 'https://lh3.googleusercontent.com/iPLAFkxemUkvXel-2O6RkA7PIP30HduRR5rcLRli2sT7aWXZHWnJGF4q9S2KQ9ywZaQHqMwVu2Rm-Ara7hOAY3vUZNKD-OSJAbcPV0GSZLEFc8-DwNxwgLOh6JtuRbInvHvcUrbMvEajDXQUkJdA7eDCB9Z0sltaWlCbOp9jjDXhAdICSctHaIThGcPbr35Qcgdt1jWJZN7uKOgx_VE0JRiZnygbnLJzO_AnzUUpsQPHeg5FbxBGmTMc2Wr-UkcLF_5OfbY90pSKDmacurPML0PPI2qc7Y6po-AaSgwnJaWrTlbEVBe7jfBNXgjqia7d_010sfeCHu3_SMHc2u99e3mxNO-KYdA0qF_PulR2x2y4kITKv9C3G_LGQ0QZzfJJPD1uAFXjvlWkftNmRDlDKCsnB8yRjvtY60Lq37YJEgzy2SacYWpfYgFnhHvy1_qCXX10uN1dUOml5q1ymdvFLJDnfblF02lsakvvVVcchhG48BhxNrp1DYFs_sXWYkZFVT3iyGMb7qTL8yU_XZC4vOhboAHiOmCGbNlxPHF3zYGZDwX_OghCcHqNJCiBviY52x_UTyOfdFJv5QqddgMrSTsjscf15w7R7IYIcU4yOZasEg-Fehc08GGe5ZjgM9NwsgdMovhqX48AsSoi4YMSKMq7B3xWRTovXaJDlk_I41Lopg-K5Zw1PxgO9Vf_EUN6rlraFlkwYCEQg_OFz3w_WbbNhALfKBV2bsxJhDXkAvLpZKjM=w1468-h978-no',
    lion: 'https://lh3.googleusercontent.com/bP-unq0_0zVQesmz9EfMqaWHC3H-8RuaTrdVZ_RTN-4FgJIXy6fu4Z7TLvDOqC9WFA5rFVYerQuo551A3M5derzkk6pCmqvEIwC-p2mbxapHCjWnQwRzkfHYavC9jhASKERkbSZcJZ0EYXyxljafJ7J6W8AHf_CIj-QPxNdOiRLrFaxFa1QS8DGZRJaL-PYfwKI6QJ2o1kYpcgc62fwRZ_J-KBekajosYTNC3-aklg3kcmEfhi_yA0bpqkAISYvuABxsT1fm9W9SlZT3ty3tScd487G7Dw9IZT2r2YfN9HUss4kfj-J-fZgLyS7Xzxkp5wO3SCsTofc6gZ4rDHdSDHa5Db_oMfrCTkBcVuTYyZO5JJ8ABfNh985AeIsYGX9UNCkET2lakpyXli4cuKAW54dr5bHJvCaO7viGUL5-ZfHeWwPwBsWMi0UHGZnIDEI85LeAiNK2PE4es0H5Lbw2SsEKpY3RXJWpozv0GSJNBzlU5bX1_kCiEoo99D_4KDgdXwlH9GFlPIznfh1grYJZWJ93L4LlnF3GwdZoHe2Ujz57jVx87ovqdst3Vwe2xPBUh3VlszNe5MsQdEcbe8FzoylhPcr9Y0PW9cgYnW4dUbEnYZXjJ1GnaMLAQIE5uFuqtM8L3e7-Biphjxve7YORlAQ-Kq4Yx4nW_D0gkljD4qc3hsi9a_ZV-oXOhWLWekRWx59L-SBXFqKHJ950nYrGp2PDn-1MHsUgEkfg4kNUOy-aoS3c=w1024-h683-no',
    tiger: 'https://lh3.googleusercontent.com/3xFuDNi4WFQ5-4l9T1rp4ua80aSqsBrh7d7I46B0r7PjMihMuYQ3tHNzrjo0SXvqRmFwq1Cg4JM95YTyXBGYGv7T3xmzSaiiMMAJi9LEHimWphkTeX7MZLtYzWJcHl2eVtuVLwQzY0LbdZk5ZdYD4Xs9Zo9Uk8QRvrMPkIf9UpAofHelPOPl65Zv-tcekFYEDr4GIpKXqFgd8GG9gj59bW79HWpRNeLiZvvKndEU7CJsrK-Q1UjopRhMZEZ9bfhAH_iRVm5dzzyg4qSBtN0c7q8_q72WajXVO2TADlDdYa8T5u8vkHjJM92JW2w1BEHL5tvLKlb4Fww5OhzvM40bWDwNVVMsN8u6YxRcSj7FFtiMDheuOclRoElV8L53Ld5b3effoPW8IlcHhI7bFkHBmayjOsVHcc3f1ghl4C_9KQBxveSJOUZWpiI6o2QSswOXzdWdbvecnLMtE9YjuUyHSa58V56nELtmwqv13uNbBbSbf_q39rroHYJiJmVeAuXIiZrpSDltrVn90UjtmTMNzn7b8-xDrtxkQijyF28xR7t6KLK4-5vWM7auDEv4CEnO2djGYZL-EBg1OeZjm9CUR2onyO6CWCldWimpQjUE3wyoVKTpbh6bbtkfNSRM3QmStLTd_c300cYnxqLPEs__FFOSUefG90CW5V9H7tchm5I6nIG0EIZRYHM8LYrl953vhyFY6wfGwxdqUN6LJFqBn-xzXxFyltv4YkkwGDhom5mhadku=w1304-h978-no',
    bear: 'https://lh3.googleusercontent.com/W8B5s873NJdQtiq8xlWtpk-C5O5REpHKClCSsoExlYWeAf2H_2TlLJDDRXmCtn5toUHiwiqpZ4uYYM5GN2WYHIQrZcfNPAoekIzRnB-rmzaTNhrmHZ6UmGJF5SrhEQ79tp-j5NW4EqSiO79JY7BxA1OLnsmoR9-Ch6-PWjyflynSZCxMOf0XUefW2vZTP9iHw872twBIqQTt2Lv2x_rcNNxx6cOCyLLLs68Kkplg19JmDsyJs3YnWbnD-oWNRHBwem9lzkHhlrW75EUtUmK0GcOeT2HoQ9Mp6V4XAUbIcjLDX8_KcEzbCQ5z5zZ4hHLVSGXXF9n3WMWpWSC7mcGo1vQ3eBNn12b3T2DLrcxU45cmGozBlhNofoPkq2wgNXY43qRdpMU4_1xS_Yn7RiI3e_7MJRTHAGJKoDeZKbZtXKHK_CRibWTTKwOTP0DnPFNESAnLDPCJYztZYbcyfTLVvrpG5WTCGAWYhbzFYd4aQPP5FImdrtBhGodEMI0YZnwTlfrb-yph193XYLEa0dA6H_RjczzdixdyspHfRzKJMGEPCnIFJn-4v55A-kw2YhxoIXAuFZNFY1HZJJh_YiD-i1eC0KUf4HHH70YKFIhm36lO6uSCUvCnBL-fszqjBnYLyVlLS3T2QCS4MQWi0--HXWNjkrtbGSYIm73_0nXTMoJpATJa4-woC30oQ_cwo9vq-FlyvTas054GgNFGBztJvg1uDSdyFQZrhAC5mviTY8eyEt9O=w1467-h978-no'
  }
}

// triggered when a user submits the form located @ https://docs.google.com/forms/d/e/1FAIpQLSes3sXxNeuf2gxlcrv0Alh8M_qoC5cusi47-G-lDva5zxrHIw/viewform
function onFormSubmit() {
  
  // get the last submitted form response object, see https://developers.google.com/apps-script/reference/forms/form-response for the FormResponse Class description
  var lastFormResponse = getLastFormResponse();
  
  // get the specific user email addreess and their favorite animal from their form response
  var responses = getUserResponse(lastFormResponse);
  var animal = responses.animal;
  var user = responses.user;
  
  // copy the presentation template and name it 'user animal'
  var newPresentationId = copyTemplate(user, animal);
  
  // gets the textbox and image page elements objects so they can be replaced with the user form responses, see https://developers.google.com/apps-script/reference/slides/page-element for the PageElement Class description
  var elements = getPageElements(newPresentationId);
  
  // replace the ~animal~ placeholder within the template with the users favorite animal
  // and replaces the image with the chosen animal image
  insertAnimalSelectionIntoPresentation(elements, animal);
  
  // share the new presentation with the user who completed the form
  shareNewPresentationWithUser(newPresentationId, user);
}

function getLastFormResponse() {
  return FormApp.openById(PARAMS.formId).getResponses().slice(-1)[0];
}

function getUserResponse(response) {
  return {
    animal: response.getItemResponses()[0].getResponse(),
    user: response.getRespondentEmail()
  }
}

function copyTemplate(user, animal) {
  var newPresentationName = user + ' ' + animal;
  return DriveApp.getFileById(PARAMS.slidesTemplateId).makeCopy(newPresentationName).getId();
}

function getPageElements(id) {
  var elements = SlidesApp.openById(id).getSlides()[0].getPageElements();
  return {
    title: elements[0],
    image: elements[1]
  }
}

function insertAnimalSelectionIntoPresentation(elements, animal) {
  elements.title.asShape().getText().replaceAllText('~animal~', animal);
  elements.image.asImage().replace(getAnimalImage(animal));  
}

function shareNewPresentationWithUser(id, user) {
  DriveApp.getFileById(id).addEditor(user);
}

function getAnimalImage(animal) {
  switch (animal) {
    case 'Dog': return PARAMS.images.dog;
    case 'Cat': return PARAMS.images.cat;
    case 'Lion': return PARAMS.images.lion;
    case 'Tiger': return PARAMS.images.tiger;
    case 'Bear': return PARAMS.images.bear;
  }  
}

// set up a trigger so that when a user submits a form, the onFormSubmit function of this script triggers
function setupTrigger() {
  var form = FormApp.openById(PARAMS.formId);
  ScriptApp.newTrigger('onFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create(); 
}
