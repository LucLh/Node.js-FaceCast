/* events.pug */
function deleteEventAndRole(idEvent,idRole,idEventRole) {
    if(confirm("Voulez-vous supprimer l'évènement ?")) {
        $.ajax({
            type : 'DELETE',
            url : '/events/delete/'+idEvent+'&'+idRole+'&'+idEventRole,
            success : function(response) {
                if(response === 'Erreur lors de la suppression') {
                    alert('Erreur..');
                } else if(response === 'Suppression réussie') {
                    document.location.href="/events";
                }
            }
        });
    } else {
        alert("Annulé !");
    }
}

/* figurants.pug */
function deleteFigurant(id) {
    if(confirm("Voulez-vous supprimer le figurant ?")) {
        $.ajax({
            type : 'DELETE',
            url : '/figurants/delete/'+id,
            success : function(response) {
                if(response === 'Erreur lors de la suppression..') {
                    alert('Erreur..');
                } else if(response === 'Suppression réussie !') {
                    document.location.href="/figurants";
                }
            }
        });
    } else {
        alert("Annulé !");
    }
}

/* insertEventType.pug */
function deleteEventType(id) {
    if(confirm("Voulez-vous supprimer ce type d'évènement ?")) {
        $.ajax({
            type : 'DELETE',
            url : '/insertEventType/delete/'+id,
            success : function(response) {
                if(response === 'Erreur lors de la suppression..') {
                    alert('Erreur..');
                } else if(response === 'Suppression réussie !') {
                    document.location.href="/insertEventType";
                }
            }
        });
    } else {
        alert("Annulé !");
    }
}

/* insertRoleType.pug */
function deleteRoleType(id) {
    if(confirm("Voulez-vous supprimer ce type de rôle ?")) {
        $.ajax({
            type : 'DELETE',
            url : '/insertRoleType/delete/'+id,
            success : function(response) {
                if(response === 'Erreur lors de la suppression..') {
                    alert('Erreur..');
                } else if(response === 'Suppression réussie !') {
                    document.location.href="/insertRoleType";
                }
            }
        });
    } else {
        alert("Annulé !");
    }
}