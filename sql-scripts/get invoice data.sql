select i.*, bu.Id BusinessId, bu.Name BusinessName, bu.RegistrationNumber BusinessRegistrationNumber, bu.VatNumber BusinessVatNumber ,r.Id ReportId, r.Notes ReportNotes,r.UserId ReportUserId, r.Notes ReportNotes, r.UserId ReportUserId, r.BookingId ReportBookingId,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join invoices i on i.BookingId = b.Id left join businesses bu on bu.Id = i.InvoiceBusinessId
