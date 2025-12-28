class Article extends Model
{
    protected $fillable = [
        'title',
        'author',
        'published_at',
        'original_url',
        'original_content',
        'updated_content',
        'references',
        'status'
    ];

    protected $casts = [
        'references' => 'array'
    ];
}
