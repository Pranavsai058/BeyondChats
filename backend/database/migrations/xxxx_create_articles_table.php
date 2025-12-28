Schema::create('articles', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('author')->nullable();
    $table->dateTime('published_at')->nullable();
    $table->string('original_url')->unique();
    $table->longText('original_content');
    $table->longText('updated_content')->nullable();
    $table->json('references')->nullable();
    $table->enum('status', ['original', 'updated'])->default('original');
    $table->timestamps();
});
