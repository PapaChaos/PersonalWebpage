<?php 
$quotes = array("Albert Einstein" => "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
				"Thomas A. Edison" => "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
				"Edwin Land" => "Creativity is the sudden cessation of stupidity.",
				"Nikola Tesla" => "The present is theirs; the future, for which I really worked, is mine.",
				"Sir Charles Chaplin" => "Imagination means nothing without doing."
);
$ran_key = array_rand($quotes);
$ran_value = $quotes[$ran_key];
?>

<div class="headerintro">
<div class=quote>
<br>
<p><i>"<?php echo $ran_value ?>"</i></p>
<p class=quotePerson>-<?php echo $ran_key ?></p>
</div>
<br>
<div class=header-lines></div>
</div>