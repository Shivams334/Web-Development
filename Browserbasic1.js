<script type="text/javascript">
var today = new Date();
var hour Now = today.getHours();
var greeting;
if (hourNow > 18) {
greet ing = 'Good evening ' ;
else i f (hourNow > 12) {
greeting = 'Good afternoon';
else if (hourNow > 0) {
greeting= ' Good morning';
else {
greeting = 'Welcome';
}
document.write(greeting) ;
</script>
