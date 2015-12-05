'use strict'

var deleteIdea = () => {
  $('#ideas').delegate('#delete-idea', 'click', (event) => {

    let $idea = $(event.toElement)
    $.ajax({
      type: 'DELETE',
      url: 'http://intelyzine.com/api/v1/ideas' + $idea.attr('idea-id'),
      success: () => {
        $idea.parent().remove()
      },
      error: () => {
        $idea.parent().remove()
        alert("Something went HORRIBLY wrong!")
      }
    })
  })
}
