function MaxLengthTextarea(objettextarea,maxlength){
    if (objettextarea.value.length > maxlength) {
      objettextarea.value = objettextarea.value.substring(0, maxlength);
      alert('Votre texte ne doit pas dépasser '+maxlength+' caractères!');
     }
  }

export const Textarea = (MaxLengthTextarea) => {
    return (
        <textarea  name="montextarea" onkeyup="MaxLengthTextarea(this, 18);">                
  écrivez votre texte en 148 caractères maximum
</textarea>
    )
}